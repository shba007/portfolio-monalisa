import { z } from 'zod'

interface Certificate {
  id: string
  participant: string
  workshopTitle: string
  workshopDate: { start: string; end: string }
}

export default defineCachedEventHandler<Promise<Certificate>>(
  async (event) => {
    try {
      const { workshopId, participantId } = await getValidatedRouterParams(
        event,
        z.object({
          workshopId: z.string().min(1),
          participantId: z.string().min(1),
        }).parse
      )

      if (!(workshopId && participantId)) {
        throw createError({ statusCode: 404, statusMessage: `pageId ${participantId} not found` })
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
      if (!participant || participant.properties.Status.status.name !== 'Attended') {
        throw createError({ statusCode: 404, statusMessage: `participant ${participantId} not found` })
      }

      return {
        id: `${workshop.id}_${participant.id}`,
        participant: notionTextStringify(participant.properties.Name.title),
        workshopTitle: notionTextStringify(workshop.properties.Name.title),
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
