import { createContext } from "react"

import { CartProductType } from "../../interfaces"

interface ContextProps {
	cart: CartProductType[]
	addProductToCart: (product: CartProductType) => void
	updateCartQuantity: (prodcut: CartProductType) => void
}

export const CartContext = createContext({} as ContextProps)
