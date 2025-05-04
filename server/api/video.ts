import { parseISO, format, addMonths, startOfMonth } from 'date-fns'

enum IDKind {
  YoutubeChannel = 'youtube#channel',
  YoutubeVideo = 'youtube#video',
}

enum ItemKind {
  YoutubeSearchResult = 'youtube#searchResult',
}

enum LiveBroadcastContent {
  None = 'none',
}

interface Thumbnail {
  url: string
  width?: number
  height?: number
}

interface YoutubeVideo {
  kind: string
  etag: string
  regionCode: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: {
    kind: ItemKind
    etag: string
    id: {
      kind: IDKind
      videoId?: string
      channelId?: string
    }
    snippet: {
      publishedAt: string
      channelId: string
      title: string
      description: string
      thumbnails: {
        default: Thumbnail
        medium: Thumbnail
        high: Thumbnail
      }
      channelTitle: string
      liveBroadcastContent: LiveBroadcastContent
      publishTime: Date
    }
  }[]
}

export default defineCachedEventHandler<Promise<Video[]>>(
  async () => {
    try {
      const { youtubeBaseUrl, youtubeAnalyticsUrl, youtubeChannelId, youtubeApiKey } = useRuntimeConfig().private

      const { items } = await $fetch<YoutubeVideo>('/search', {
        baseURL: youtubeBaseUrl,
        query: {
          key: youtubeApiKey,
          channelId: youtubeChannelId,
          part: 'snippet,id',
          order: 'date',
          maxResults: 6,
        },
      })

      const endDateObj = addMonths(new Date(), 1)
      const endDate = format(startOfMonth(endDateObj), 'yyyy-MM-dd')

      const enriched = await Promise.all(
        items
          .filter((item) => Boolean(item.id.videoId))
          .map(async ({ id, snippet }) => {
            const vid = id.videoId!

            const publishedDate = parseISO(snippet.publishedAt)

            const { rows } = await apiFetch<{ rows: string[][] }>('/reports', {
              baseURL: youtubeAnalyticsUrl,
              query: {
                ids: `channel==${youtubeChannelId}`,
                startDate: format(startOfMonth(publishedDate), 'yyyy-MM-dd'),
                endDate,
                metrics: 'views',
                dimensions: 'month',
                filters: `video==${vid}`,
                sort: 'month',
              },
            })

            const viewData = rows.map(([month, views]) => ({
              month,
              view: Number(views),
            }))

            return {
              title: snippet.title,
              publishedAt: snippet.publishedAt,
              thumbnail: snippet.thumbnails.high.url,
              viewData,
              url: `https://www.youtube.com/watch?v=${vid}`,
            } as Video
          })
      )

      return enriched
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
