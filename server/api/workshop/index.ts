import type { WorkshopFile } from '~~/shared/types'

export default defineCachedEventHandler<Promise<Workshop[]>>(
  async () => {
    try {
      const workshops = await readYamlFile<WorkshopFile>('workshops.yml')

      if (!workshops) throw createError({ statusCode: 500, statusMessage: 'workshop is undefined' })

      return workshops.map(({ name, place, paymentDetails, ...rest }) => ({
        name,
        place,
        ...rest,
        paymentLink: generateUpiDeepLink(paymentDetails.accountId, paymentDetails.vpa, place, paymentDetails.amount, name),
        url: `/workshops/${slugify(name)}`,
      }))
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
