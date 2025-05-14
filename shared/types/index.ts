export interface ViewItem {
  month: string
  view: number
}

export interface Video {
  title: string
  publishedAt: string
  thumbnail: string
  viewData: ViewItem[]
  url: string
}

export interface Testimonial {
  image: string
  name: string
  message: string
}

export interface Location {
  id: string
  image: string
  name: string
  address: string
  mapLink: string
  availableWeekdays: string[]
  email: string
  phone: string
  website: string
}

export interface Workshop {
  name: string
  image: string
  url: string
  place: string
  address: string
  mapLink: string
  registerLink: string
  paymentLink: string
  feedbackLink: string
}

export interface WorkshopFile extends Omit<Workshop, 'paymentLink'> {
  paymentDetails: PaymentDetails
}

export interface PaymentDetails {
  accountId: string
  vpa: string
  amount: number
}

export interface Blog {
  id: string
  title: string
  description: string
  cover: string | null
  createdAt: string
  modifiedAt: string
  publishedAt: string
  url: string
}

export interface BlogDetails extends Blog {
  markdown: string
}

/* Server Only */
export const resourceTypes = ['testimonial', 'workshop', 'blog'] as const

export type ResourceType = (typeof resourceTypes)[number]

export interface ResourceRecordMap {
  testimonial: null
  workshop: NotionWorkshop
  blog: NotionBlog
}

export interface Resource<T extends ResourceType = ResourceType> {
  type: T
  notificationStatus: boolean
  record: ResourceRecordMap[T]
}

export type NotionDB = { [K in ResourceType]: string }

type NotionMediaAsset =
  | {
      type: 'file'
      file: {
        url: string
        expiry_time: string
      }
    }
  | {
      type: 'external'
      external: {
        url: string
      }
    }
  | null

export interface NotionBlog {
  id: string
  created_time: string
  last_edited_time: string
  cover: NotionMediaAsset
  icon: NotionMediaAsset
  properties: {
    Name: {
      title: {
        plain_text: string
      }[]
    }
    Type: {
      select: {
        name: 'Blog'
      }
    }
    Status: {
      status: {
        name: 'Plan' | 'Draft' | 'Ready' | 'Publish' | 'Unpublish'
      }
    }
    'Publish date': {
      date: {
        start: string
      }
    }
  }
}

export interface NotionWorkshop {
  id: string
  created_time: Date
  last_edited_time: Date
  cover: NotionMediaAsset
  icon: NotionMediaAsset
  properties: {
    Name: {
      title: {
        type: string
        text: {
          content: string
          link: null
        }
        plain_text: string
        href: null
      }[]
    }
    Place: {
      type: string
      select: {
        name: string
      }
    }
    Address: {
      type: string
      rich_text: {
        type: string
        plain_text: string
      }[]
    }
    Map: {
      type: string
      url: string
    }
    'Seat Capacity': {
      type: string
      number: number
    }
    'Registration date': {
      type: string
      date: {
        start: string
        end: string
        time_zone: null
      }
    }
    'Workshop date': {
      type: string
      date: {
        start: string
        end: string
        time_zone: null
      }
    }
    Cost: {
      type: string
      number: number
    }
    Participants: {
      type: 'relation'
      relation: { id: string }[]
    }
  }
  url: string
  public_url: null
}

export interface NotionParticipant {
  id: string
  created_time: Date
  last_edited_time: Date
  cover: NotionMediaAsset
  icon: NotionMediaAsset
  properties: {
    Name: {
      title: {
        type: string
        text: {
          content: string
          link: null
        }
        plain_text: string
        href: null
      }[]
    }
  }
}
