import { z } from 'zod'
import { generateAvatar } from '~~/server/api/testimonial'

export default defineCachedEventHandler(
  async (event) => {
    try {
      const { workshopId } = await getValidatedRouterParams(
        event,
        z.object({
          workshopId: z.string().min(1),
        }).parse
      )

      const config = useRuntimeConfig()
      const notionDbId = config.private.notionDbId as unknown as NotionDB

      if (!workshopId) {
        throw createError({ statusCode: 404, statusMessage: `pageId ${workshopId} not found` })
      }

      const workshop = (await notion.pages.retrieve({ page_id: workshopId })) as unknown as NotionWorkshop
      if (!workshop || (workshop.properties.Status.status.name !== 'Live' && workshop.properties.Status.status.name !== 'Complete')) {
        throw createError({ statusCode: 404, statusMessage: `pageId ${workshopId} not found` })
      }

      const title = notionTextStringify(workshop.properties.Name.title)

      const participants = (
        await notion.databases.query({
          database_id: notionDbId.participant,
        })
      ).results as unknown as NotionParticipant[]

      return {
        id: workshop.id,
        name: title,
        image: workshop.cover?.type === 'external' ? workshop.cover.external.url : '',
        place: workshop.properties.Place.select.name,
        address: notionTextStringify(workshop.properties.Address.rich_text),
        mapLink: workshop.properties.Map.url,
        registrationDate: { start: workshop.properties['Registration date'].date.start, end: workshop.properties['Registration date'].date.end },
        workshopDate: { start: workshop.properties['Workshop date'].date.start, end: workshop.properties['Workshop date'].date.end },
        participants: workshop.properties.Participants.relation
          .map(({ id }) => {
            const participant = participants.find((participant) => participant.id === id)
            if (!participant || participant.properties.Status.status.name !== 'Attended') return null
            const title = notionTextStringify(participant.properties.Name.title)

            return { id: participant.id, name: title, image: generateAvatar(title, 'female') }
          })
          .filter((item) => item !== null),
        url: `/workshop/${workshop.id}`,
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
