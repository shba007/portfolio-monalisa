import { createAvatar } from '@dicebear/core'
import { micah } from '@dicebear/collection'
import { Client } from '@notionhq/client'

interface NotionTestimonial {
  id: string
  created_time: string
  last_edited_time: string
  properties: {
    Email: {
      email: string
    }
    Review: {
      rich_text: {
        text: {
          content: string
          link: string | null
        }
        plain_text: string
      }[]
    }
    Rating: {
      select: {
        name: string
      }
    }
    Consent: {
      checkbox: boolean
    }
    'Submission time': {
      created_time: string
    }
    'Full Name': {
      title: {
        plain_text: string
      }[]
    }
  }
  url: string
  public_url: string | null
}

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

let notion: Client

export default defineCachedEventHandler<Promise<Testimonial[]>>(
  async () => {
    try {
      const config = useRuntimeConfig()
      if (!config.private.notionApiKey) {
        throw new Error('Notion API Key Not Found')
      }

      const notionDbId = JSON.parse(config.private.notionDbId).testimonials

      notion = notion ?? new Client({ auth: config.private.notionApiKey })
      const data = await notion.databases.query({ database_id: notionDbId })

      const testimonials = data.results as unknown as NotionTestimonial[]

      if (!testimonials) throw createError({ statusCode: 500, statusMessage: 'testimonials is undefined' })

      return testimonials
        .map(({ properties }) => {
          if (!properties.Consent.checkbox) return null

          const name = properties['Full Name'].title.map(({ plain_text }) => plain_text).join('')
          const gender = 'female'
          const message = properties.Review.rich_text.map(({ plain_text }) => plain_text).join('')

          return {
            image: generateAvatar(name, gender),
            name: shortenName(name),
            message,
          }
        })
        .filter((value) => !!value)
    } catch (error: unknown) {
      console.error('API testimonials GET', error)

      throw createError({
        statusCode: 500,
        statusMessage: 'Some Unknown Error Found',
      })
    }
  },
  { maxAge: 60 * 60 }
)
