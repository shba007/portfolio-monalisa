import type { Location } from '~/utils/types'

const locations = readYamlFile<Location>('locations.yml')

export default defineEventHandler<Location[]>(() => {
  try {
    return locations
  } catch (error: any) {
    console.error('API locations GET', error)

    throw createError({
      statusCode: 500,
      statusMessage: 'Some Unknown Error Found',
    })
  }
})
