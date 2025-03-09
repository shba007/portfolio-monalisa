export default defineCachedEventHandler<Promise<{ id: string; title: string }>>(
  async (event) => {
    try {
      const slug = getRouterParam(event, 'slug')!.toString().replace(/,$/, '')

      const workshops = await readYamlFile<WorkshopFile>('workshops.yml')

      if (!workshops) throw createError({ statusCode: 500, statusMessage: 'workshop is undefined' })

      const workshop = workshops.find(({ name }) => slugify(name) === slug)

      if (!workshop) throw createError({ statusCode: 404, statusMessage: `workshop ${slug} not found` })

      return {
        id: `/images/${workshop.image}.jpg`,
        title: workshop.name,
      }
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
