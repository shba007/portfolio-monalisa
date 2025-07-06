export default defineCachedEventHandler<Promise<Location[]>>(
  async () => {
    try {
      const locations = await readYamlFile<Location>('locations.yml')

      if (!locations) throw createError({ statusCode: 500, statusMessage: 'locations is undefined' })

      return locations
    } catch (error: unknown) {
      console.error('API locations GET', error)

      throw createError({
        statusCode: 500,
        statusMessage: 'Some Unknown Error Found',
      })
    }
  },
  { maxAge: 60 * 60 }
)
