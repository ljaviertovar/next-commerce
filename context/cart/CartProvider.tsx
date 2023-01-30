import { useReducer } from "react"

import { cartReducer } from "./cartReducer"
import { CartContext } from "./CartContext"

import { CartProductType } from "../../interfaces"

interface CartProviderType {
	children: React.ReactNode
}

export interface CartState {
	cart: CartProductType[]
}

const INITIAL_STATE: CartState = {
	cart: [],
}

export const CartProvider = ({ children }: CartProviderType) => {
	const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)

	return (
		<CartContext.Provider
			value={{
				...state,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
