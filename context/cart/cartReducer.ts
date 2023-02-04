import { CartState } from "./CartProvider"

import { CartProductType } from "../../interfaces"

type CartActionType =
	| { type: "LOAD_CART_FROM_COOKIES_STORAGE"; payload: CartProductType[] }
	| { type: "UPDATE_CART"; payload: CartProductType[] }
	| { type: "UPDATE_QUANTITY"; payload: CartProductType[] }
	| { type: "REMOVE_PRODUCT_IN_CART"; payload: CartProductType[] }
	| {
			type: "CART_UPDATE_SUMMARY"
			payload: {
				numberOfItems: number
				subTotal: number
				taxes: number
				total: number
			}
	  }

export const cartReducer = (state: CartState, action: CartActionType): CartState => {
	switch (action.type) {
		case "LOAD_CART_FROM_COOKIES_STORAGE":
			console.log("payload", action.payload)
			return {
				...state,
				cart: [...action.payload],
			}
		case "UPDATE_CART":
			return {
				...state,
				cart: [...action.payload],
			}

		case "UPDATE_QUANTITY":
			return {
				...state,
				cart: [...action.payload],
			}

		case "REMOVE_PRODUCT_IN_CART":
			return {
				...state,
				cart: action.payload,
			}

		case "CART_UPDATE_SUMMARY":
			return {
				...state,
				...action.payload,
			}

		default:
			return state
	}
}
