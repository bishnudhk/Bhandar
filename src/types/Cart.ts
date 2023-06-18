
export type CartItem = {
    image: string | undefined
    slug: any
    quantity: number
    countInStock: number
    price: number
    _id: number
    name: string
}

export type ShippingAddress = {
    fullName: string
    address: string
    city: string
    country: string
    postalCode: string
}

export type Cart = {
    cartItems: CartItem[]
    shippingAddress: ShippingAddress
    itemsPrice: number
    shippingPrice: number
    taxPrice: number
    totalPrice: number
    paymentMethod: string
}