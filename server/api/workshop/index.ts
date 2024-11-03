import type { PaymentDetails, Workshop } from '~/utils/types'

interface WorkshopFile extends Omit<Workshop, 'paymentLink'> {
  paymentDetails: PaymentDetails
}

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
      }))
    } catch (error: any) {
      console.error('API workshops GET', error)

      throw createError({
        statusCode: 500,
        statusMessage: 'Some Unknown Error Found',
      })
    }
  },
  { maxAge: 60 * 60 }
)
