let accessToken: string | null = null

export default async function apiFetch<T>(
  path: string,
  options: {
    baseURL: string
    method?: 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'get' | 'head' | 'patch' | 'post' | 'put' | 'delete' | 'connect' | 'options' | 'trace'
    query?: Record<string, unknown>
    body?: BodyInit | Record<string, unknown> | null
    headers?: Record<string, string>
    _retry?: boolean
  }
): Promise<T> {
  const { baseURL, headers = {}, _retry = false, ...rest } = options

  try {
    return (await $fetch(path, {
      baseURL,
      headers: accessToken ? { ...headers, Authorization: `Bearer ${accessToken}` } : headers,
      body: rest.body as BodyInit | Record<string, unknown> | null,
      ...rest,
    })) as T
  } catch (err: unknown) {
    const status = (err as { response?: { status?: number } })?.response?.status

    const { youtubeRefreshToken, youtubeClientId, youtubeClientSecret } = useRuntimeConfig().private

    if (status === 401 && !_retry && youtubeRefreshToken) {
      const safeId = encodeURIComponent(youtubeClientId)
      const safeSecret = encodeURIComponent(youtubeClientSecret)

      const basicAuth = Buffer.from(`${safeId}:${safeSecret}`).toString('base64')

      const tokens = await $fetch<{ access_token: string; refresh_token: string }>('/token', {
        baseURL: 'https://oauth2.googleapis.com',
        method: 'POST',
        headers: {
          Authorization: `Basic ${basicAuth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          refresh_token: youtubeRefreshToken,
          grant_type: 'refresh_token',
        }).toString(),
      })

      accessToken = tokens.access_token
      return apiFetch<T>(path, { ...options, _retry: true })
    }

    throw err
  }
}
