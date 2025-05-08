import { Client } from '@notionhq/client'

let notion: Client

export default defineCachedEventHandler<Promise<Workshop[]>>(
  async () => {
    try {
      const config = useRuntimeConfig()
      if (!config.private.notionApiKey) {
        throw new Error('Notion API Key Not Found')
      }

      const notionDbId = config.private.notionDbId as unknown as NotionDB

      notion = notion ?? new Client({ auth: config.private.notionApiKey })

      const data = await notion.databases.query({
        database_id: notionDbId.workshop,
      })

      const workshops = data.results as unknown as NotionWorkshop[]
      const payment = config.private.paymentUpiInfo as unknown as {
        accountName: string
        accountId: string
        vpa: string
      }

      return workshops.map(({ id, cover, properties }) => {
        const title = properties.Name.title.map(({ plain_text }) => plain_text ?? '').join('') as string
        const amount = properties.Cost.number

        return {
          id,
          name: title,
          image: cover?.type === 'external' ? cover.external.url : '',
          place: properties.Place.select.name,
          address: properties.Address.rich_text.map(({ plain_text }) => plain_text ?? '').join('') as string,
          mapLink: properties.Map.url,
          registerLink: '',
          paymentLink: generateUpiDeepLink(payment.accountId, payment.vpa, payment.accountName, amount, title),
          feedbackLink: '',
          url: `/workshop/${slugify(title)}_${id}`,
        }
      })
    } catch (error: unknown) {
      console.error('API workshops GET', error)

      throw createError({
        statusCode: 500,
        statusMessage: 'Some Unknown Error Found',
      })
    }
  },
  { maxAge: 60 * 60 }
)
