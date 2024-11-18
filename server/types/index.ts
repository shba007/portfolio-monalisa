export interface WorkshopFile extends Omit<Workshop, 'paymentLink'> {
  paymentDetails: PaymentDetails
}