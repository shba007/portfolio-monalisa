import { createAvatar } from '@dicebear/core'
import { micah } from '@dicebear/collection'

function generateAvatar(name: string, gender: 'male' | 'female') {
  const avatar = createAvatar(micah, {
    seed: name,
    baseColor: ['ac6651', 'f9c9b6'],
    backgroundColor: ['b6e3f4', 'c0aede', 'd1d4f9'],
    mouth: ['laughing', 'smile', 'smirk'],
    scale: 70,
    translateY: 12,
    shirt: gender === 'female' ? ['open'] : ['collared', 'crew'],
    hair: gender === 'female' ? ['dannyPhantom', 'full', 'pixie'] : ['fonze', 'mrClean', 'turban'],
    eyebrows: gender === 'female' ? ['eyelashesDown', 'eyelashesUp'] : ['down', 'up'],
    facialHairProbability: gender === 'female' ? 0 : 100,
    earringsProbability: gender === 'female' ? 100 : 0,
  })

  return avatar.toDataUri()
}

function shortenName(name: string) {
  const [firstName, lastName] = name.split(' ')
  return `${firstName[0]}. ${lastName}`
}

export default defineCachedEventHandler<Promise<Testimonial[]>>(
  async () => {
    try {
      const testimonials = await readYamlFile<{ name: string; gender: 'male' | 'female'; message: string }>('testimonials.yml')

      if (!testimonials) throw createError({ statusCode: 500, statusMessage: 'testimonials is undefined' })

      return testimonials.map(({ name, gender, message }) => ({
        image: generateAvatar(name, gender),
        name: shortenName(name),
        message,
      }))
    } catch (error: any) {
      console.error('API testimonials GET', error)

      throw createError({
        statusCode: 500,
        statusMessage: 'Some Unknown Error Found',
      })
    }
  },
  { maxAge: 60 * 60 }
)
