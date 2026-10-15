import type { EmailPayload } from '~~/server/utils/email'

export default defineEventHandler<Promise<{ success: boolean }>>(async (event) => {
  try {
    const body = await readBody<EmailPayload>(event)

    const success = await sendEmail(body)

    return { success }
  } catch (error: unknown) {
    if (error instanceof Error && 'statusCode' in error) {
      throw error
    }

    console.error('API notification/email/send POST', error)

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email via external API',
    })
  }
})
