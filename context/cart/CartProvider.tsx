import { useEffect, useReducer } from "react"
import Cookie from "js-cookie"

import { cartReducer } from "./cartReducer"
import { CartContext } from "./CartContext"

import { CartProductType } from "../../interfaces"

interface CartProviderType {
	children: React.ReactNode
}

export interface CartState {
	cart: CartProductType[]
	numberOfItems: number
	subTotal: number
	taxes: number
	total: number
}

const INITIAL_STATE: CartState = {
	cart: Cookie.get("cart") ? JSON.parse(Cookie.get("cart")!) : [],
	numberOfItems: 0,
	subTotal: 0,
	taxes: 0,
	total: 0,
}

export const CartProvider = ({ children }: CartProviderType) => {
	const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)

	// useEffect(() => {
	// 	try {
	// 		const cookieProducts = Cookie.get("cart") ? JSON.parse(Cookie.get("cart")!) : []
	// 		dispatch({ type: "LOAD_CART_FROM_COOKIES_STORAGE", payload: cookieProducts })
	// 	} catch (error) {
	// 		dispatch({ type: "LOAD_CART_FROM_COOKIES_STORAGE", payload: [] })
	// 	}
	// }, [])

	useEffect(() => {
		Cookie.set("cart", JSON.stringify(state.cart))
	}, [state.cart])

	useEffect(() => {
		const numberOfItems = state.cart.reduce((prev, current) => current.quantity + prev, 0)
		const subTotal = state.cart.reduce((prev, current) => current.price * current.quantity + prev, 0)
		const taxes = subTotal * Number(process.env.NEXT_PUBLIC_TAX_RATE || 0)
		const total = subTotal + taxes

		const orderSummary = {
			numberOfItems,
			subTotal,
			taxes,
			total,
		}

		dispatch({ type: "CART_UPDATE_SUMMARY", payload: orderSummary })
		console.log({ orderSummary })
	}, [state.cart])

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

	const updateCartQuantity = (prodcut: CartProductType) => {
		const cartUpdated = state.cart.map(p => {
			if (prodcut._id !== p._id && prodcut.size !== p.size) return p
			return prodcut
		})

		dispatch({ type: "UPDATE_QUANTITY", payload: cartUpdated })
	}

	const removeCartProduct = (product: CartProductType) => {
		console.log({ product })
		const updatedcart = state.cart.filter(p => !(p._id === product._id && p.size === product.size))

		dispatch({ type: "REMOVE_PRODUCT_IN_CART", payload: updatedcart })
	}

	return (
		<CartContext.Provider
			value={{
				...state,
				addProductToCart,
				removeCartProduct,
				updateCartQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
