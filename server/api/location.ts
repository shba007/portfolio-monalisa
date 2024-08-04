import type { Location } from '~/utils/types'

export default defineCachedEventHandler<Location[]>(
  () => {
    try {
      const locations = readYamlFile<Location>('locations.yml')

      return locations
    } catch (error: any) {
      console.error('API locations GET', error)

      throw createError({
        statusCode: 500,
        statusMessage: 'Some Unknown Error Found',
      })
    }
  },
  { maxAge: 60 * 60 }
)
