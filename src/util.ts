import { ApiError } from "./types/ApiError";
import { CartItem } from "./types/Cart";
import { Products } from "./types/Products";

export const getError = (error: ApiError) => {
    return error.response && error.response.data.message
    ? error.response.data.message
    : error.message
}

export const convertProductToCartItem = (product: Products): CartItem => {
    const cartItem: CartItem = {
        _id: product.id,
        name: product.name,
        slug: product.slug,
        image: product.image,
        price: product.price,
        countInStock: product.countInStock,
        quantity: 1,
    }
    return cartItem;
}