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
  availableWeekdays: string[]
  email: string
  phone: string
  website: string
  location: string
}

export interface Workshop {
  image: string
  name: string
  place: string
  address: string
  location: string
  formLink: string
  paymentLink: string
}

export interface PaymentDetails {
  vpa: string
  amount: number
}
