export default defineCachedEventHandler<Promise<Workshop[]>>(
  async () => {
    try {
      const config = useRuntimeConfig()
      const notionDbId = config.private.notionDbId as unknown as NotionDB

      const workshops = await notionQueryDb<NotionWorkshop>(notion, notionDbId.workshop)
      const payment = config.private.paymentUpiInfo as unknown as {
        accountName: string
        accountId: string
        vpa: string
      }

      const results = workshops.map(({ id, cover, properties }) => {
        const title = notionTextStringify(properties.Name.title)

        if (properties.Status.status.name !== 'Live' && properties.Status.status.name !== 'Complete') return null

        return {
          id,
          name: title,
          image: cover?.type === 'external' ? cover.external?.url : '',
          place: properties.Place.select?.name ?? '',
          address: notionTextStringify(properties.Address.rich_text),
          mapLink: properties.Map.url,
          registrationDate: { start: properties['Registration date'].date.start, end: properties['Registration date'].date.end },
          workshopDate: { start: properties['Workshop date'].date.start, end: properties['Workshop date'].date.end },
          registerLink: Date.now() < new Date(properties['Registration date'].date.end).getTime() ? 'https://monalisa-bairagi.notion.site/1f223e46b4d780708424dc2ea258c899' : null,
          paymentLink:
            Date.now() < new Date(properties['Registration date'].date.end).getTime() ? generateUpiDeepLink(payment.accountId, payment.vpa, payment.accountName, properties.Cost.number, title) : null,
          feedbackLink:
            Date.now() - new Date(properties['Workshop date'].date.end).getTime() <= 7 * 24 * 60 * 60 * 1000 ? 'https://monalisa-bairagi.notion.site/21923e46b4d78079967fffcf8aa37167' : null,
          url: `/workshop/${id}`,
        }
      })

      return results.filter((item) => item !== null).sort((a, b) => new Date(b.workshopDate.start).getTime() - new Date(a.workshopDate.start).getTime())
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
