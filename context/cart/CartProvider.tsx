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

	const addProductToCart = (product: CartProductType) => {
		const isProductAdded = state.cart.some(p => p._id === product._id && p.size === product.size)

		if (!isProductAdded) return dispatch({ type: "UPDATE_CART", payload: [...state.cart, product] })

		const updatedCart = state.cart.map(p => {
			if (p._id === product._id && p.size === product.size) {
				return { ...product, quantity: p.quantity + product.quantity }
			}

			return p
		})

		dispatch({ type: "UPDATE_CART", payload: updatedCart })
	}

	return (
		<CartContext.Provider
			value={{
				...state,
				addProductToCart,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
