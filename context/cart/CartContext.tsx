import { createContext } from "react"

import { CartProductType } from "../../interfaces"

interface ContextProps {
	cart: CartProductType[]
}

export const CartContext = createContext({} as ContextProps)
