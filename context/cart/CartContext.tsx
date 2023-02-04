import { createContext } from "react"

import { CartProductType } from "../../interfaces"

interface ContextProps {
	cart: CartProductType[]
	numberOfItems: number
	subTotal: number
	taxes: number
	total: number
	addProductToCart: (product: CartProductType) => void
	updateCartQuantity: (prodcut: CartProductType) => void
	removeCartProduct: (prodcut: CartProductType) => void
}

export const CartContext = createContext({} as ContextProps)
