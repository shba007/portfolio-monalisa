import slugify from '~/utils/slugify'
import type { PaymentDetails, Workshop } from '~/utils/types'

interface WorkshopFile extends Omit<Workshop, 'paymentLink'> {
  paymentDetails: PaymentDetails
}

export default defineCachedEventHandler<Promise<any>>(
  async (event) => {
    try {
      const slug = getRouterParam(event, 'slug')

      const workshops = await readYamlFile<WorkshopFile>('workshops.yml')

      if (!workshops) throw createError({ statusCode: 500, statusMessage: 'workshop is undefined' })

      const workshop = workshops.find(({ name }) => slugify(name) === slug)

      if (!workshop) throw createError({ statusCode: 404, statusMessage: `workshop ${slug} not found` })

      return {
        id: `/images/${workshop.image}.jpg`,
        title: workshop.name,
      }
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
