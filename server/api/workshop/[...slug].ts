import { Client } from '@notionhq/client'
import { z } from 'zod'

let notion: Client

export default defineCachedEventHandler<Promise<{ name: string; image: string; url: string }>>(
  async (event) => {
    try {
      const config = useRuntimeConfig()
      if (!config.private.notionApiKey) {
        throw new Error('Notion API Key Not Found')
      }

      const { slug } = await getValidatedRouterParams(
        event,
        z.object({
          slug: z.string().min(1),
        }).parse
      )

      notion = notion ?? new Client({ auth: config.private.notionApiKey })

      const [name, _ext] = slug.split('.')
      const pageId = name?.split('_').at(-1)

      if (!pageId) {
        throw createError({ statusCode: 404, statusMessage: `pageId ${slug} not found` })
      }

      const workshop = (await notion.pages.retrieve({ page_id: pageId })) as unknown as NotionWorkshop
      if (!workshop) {
        throw createError({ statusCode: 404, statusMessage: `pageId ${slug} not found` })
      }

      const title = workshop.properties.Name.title.map(({ plain_text }) => plain_text ?? '').join('') as string

      return {
        id: workshop.id,
        name: title,
        image: workshop.cover?.type === 'external' ? workshop.cover.external.url : '',
        place: workshop.properties.Place.select.name,
        address: workshop.properties.Address.rich_text.map(({ plain_text }) => plain_text ?? '').join('') as string,
        mapLink: workshop.properties.Map.url,
        registrationDate: { start: workshop.properties['Registration date'].date.start, end: workshop.properties['Registration date'].date.end },
        workshopDate: { start: workshop.properties['Workshop date'].date.start, end: workshop.properties['Workshop date'].date.end },
        url: `/workshop/${slugify(title)}_${workshop.id}`,
      }
    } catch (error: unknown) {
      console.error('API workshop/[...slug] GET', error)

      throw createError({
        statusCode: 500,
        statusMessage: 'Some Unknown Error Found',
      })
    }
  },
  { maxAge: 60 * 60 }
)
