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
      publishedAt: Date
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

export default defineCachedEventHandler<Promise<Video[]>>(
  async () => {
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
  },
  { maxAge: 60 * 60 }
)
