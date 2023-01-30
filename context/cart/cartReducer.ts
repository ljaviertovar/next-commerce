import { CartState } from "./CartProvider"

import { CartProductType } from "../../interfaces"

type CartActionType =
	| { type: "LOAD_CART_FROM_COOKIES_STORAGE"; payload: CartProductType[] }
	| { type: "ADD_PRODUCT"; payload: CartProductType[] }

export const cartReducer = (state: CartState, action: CartActionType): CartState => {
	switch (action.type) {
		case "LOAD_CART_FROM_COOKIES_STORAGE":
			return {
				...state,
			}

		default:
			return state
	}
}
