export interface EmailPayload {
  to: string | string[]
  from?: string
  subject: string
  html?: string
  text?: string
}

/**
 * Sends an email via a generic Cloud HTTP Email provider (e.g. Resend, Postmark, SendGrid, or custom REST endpoint).
 * Uses Nitro's built-in $fetch with zero third-party socket or native SMTP dependencies.
 */
export async function sendEmail(payload: EmailPayload): Promise<boolean> {
  const config = useRuntimeConfig()
  const apiKey = config.private.emailApiKey
  const apiUrl = config.private.emailApiUrl || 'https://api.resend.com/emails'
  const defaultFrom = config.private.emailFrom || 'Monalisa Bairagi <contact@monalisa-bairagi.com>'

  if (!apiKey) {
    console.warn('sendEmail: NUXT_PRIVATE_EMAIL_API_KEY is not configured.')
    return false
  }

  try {
    const recipients = Array.isArray(payload.to) ? payload.to : [payload.to]

    await $fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: {
        from: payload.from || defaultFrom,
        to: recipients,
        subject: payload.subject,
        html: payload.html,
        text: payload.text,
      },
    })

    return true
  } catch (error) {
    console.error('sendEmail error:', error)
    return false
  }
}
