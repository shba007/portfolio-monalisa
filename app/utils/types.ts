export interface Video {
  title: string
  publishedAt: Date
  thumbnail: string
  views: number
  link: string
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
  image: string
  name: string
  place: string
  address: string
  mapLink: string
  registerLink: string
  paymentLink: string
  feedbackLink: string
}

export interface PaymentDetails {
  accountId: string
  vpa: string
  amount: number
}
