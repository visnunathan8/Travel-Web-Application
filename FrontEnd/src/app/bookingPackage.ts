export interface bookingPackage{
  customerId?:BigInteger,
  travelPackageId?:BigInteger,
  paymentId?:BigInteger,
  totalPrice: BigInteger,
  departureDate: string
}
