import { Client } from '@notionhq/client'
import { z } from 'zod'

let notion: Client

export default defineCachedEventHandler<Promise<{ id: string; participant: string; workshopTitle: string }>>(
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

      const [workshopId, participantId] = slug.split(',')

      if (!(workshopId && participantId)) {
        throw createError({ statusCode: 404, statusMessage: `pageId ${slug} not found` })
      }

      const workshop = (await notion.pages.retrieve({ page_id: workshopId })) as unknown as NotionWorkshop
      if (!workshop) {
        throw createError({ statusCode: 404, statusMessage: `workshop ${workshopId} not found` })
      }

      const participants = workshop.properties.Participants.relation.map(({ id }) => id)

      if (!participants.includes(participantId)) {
        throw createError({ statusCode: 404, statusMessage: `participant ${participantId} not found` })
      }

      const participant = (await notion.pages.retrieve({ page_id: participantId })) as unknown as NotionParticipant
      if (!participant) {
        throw createError({ statusCode: 404, statusMessage: `participant ${participantId} not found` })
      }

      return {
        id: `${workshop.id}_${participant.id}`,
        participant: participant.properties.Name.title.map(({ plain_text }) => plain_text ?? '').join('') as string,
        workshopTitle: workshop.properties.Name.title.map(({ plain_text }) => plain_text ?? '').join('') as string,
        workshopDate: { start: workshop.properties['Workshop date'].date.start, end: workshop.properties['Workshop date'].date.end },
      }
    } catch (error: unknown) {
      console.error('API certificate/[...slug] GET', error)

      throw createError({
        statusCode: 500,
        statusMessage: 'Some Unknown Error Found',
      })
    }
  },
  { maxAge: 60 * 60 }
)
