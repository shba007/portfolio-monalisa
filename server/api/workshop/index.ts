export default defineCachedEventHandler<Promise<Workshop[]>>(
  async () => {
    try {
      const config = useRuntimeConfig()
      const notionDbId = config.private.notionDbId as unknown as NotionDB

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
        const title = notionTextStringify(properties.Name.title)
        const amount = properties.Cost.number

        return {
          id,
          name: title,
          image: cover?.type === 'external' ? cover.external.url : '',
          place: properties.Place.select.name,
          address: notionTextStringify(properties.Address.rich_text),
          mapLink: properties.Map.url,
          registrationDate: { start: properties['Registration date'].date.start, end: properties['Registration date'].date.end },
          workshopDate: { start: properties['Workshop date'].date.start, end: properties['Workshop date'].date.end },
          registerLink: '',
          paymentLink: generateUpiDeepLink(payment.accountId, payment.vpa, payment.accountName, amount, title),
          feedbackLink: '',
          url: `/workshop/${slugify(title)}_${id}`,
        }
      })
    } catch (error: unknown) {
      console.error('API workshop GET', error)

      throw createError({
        statusCode: 500,
        statusMessage: 'Some Unknown Error Found',
      })
    }
  },
  { maxAge: 60 * 60 }
)
