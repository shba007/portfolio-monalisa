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
  avilableWeekdays: string[]
  email: string
  phone: string
  website: string
  location: string
}

export interface Video {
  title: string
  publishedAt: Date
  thumbnail: string
  views: number
  link: string
}
