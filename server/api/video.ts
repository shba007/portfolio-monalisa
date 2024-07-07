import type { Video } from '~/utils/types'

interface YoutubeVideo {
  kind: string
  etag: string
  regionCode: string
  pageInfo: PageInfo
  items: Item[]
}

interface Item {
  kind: ItemKind
  etag: string
  id: ID
  snippet: Snippet
}

interface ID {
  kind: IDKind
  videoId?: string
  channelId?: string
}

enum IDKind {
  YoutubeChannel = 'youtube#channel',
  YoutubeVideo = 'youtube#video',
}

enum ItemKind {
  YoutubeSearchResult = 'youtube#searchResult',
}

interface Snippet {
  publishedAt: Date
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  liveBroadcastContent: LiveBroadcastContent
  publishTime: Date
}

enum LiveBroadcastContent {
  None = 'none',
}

interface Thumbnails {
  default: Default
  medium: Default
  high: Default
}

interface Default {
  url: string
  width?: number
  height?: number
}

interface PageInfo {
  totalResults: number
  resultsPerPage: number
}

export default defineEventHandler<Promise<Video[]>>(async () => {
  try {
    const { youtubeBaseUrl, youtubeApiKey, youtubeChannelId } = useRuntimeConfig().private

    const videos = await $fetch<YoutubeVideo>('/search', {
      baseURL: youtubeBaseUrl,
      query: {
        key: youtubeApiKey,
        channelId: youtubeChannelId,
        part: 'snippet,id',
        order: 'date',
        maxResults: 6,
      },
    })

    return videos.items.map<Video>(({ snippet, id }) => ({
      title: snippet.title,
      publishedAt: snippet.publishedAt,
      thumbnail: snippet.thumbnails.high.url,
      views: 1000,
      link: `https://www.youtube.com/watch?v=${id.videoId}`,
    }))
  } catch (error: any) {
    console.error('API locations GET', error)

    throw createError({
      statusCode: 500,
      statusMessage: 'Some Unknown Error Found',
    })
  }
})
