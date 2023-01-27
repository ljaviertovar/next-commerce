import { UiState } from "./UiProvider"

type UiActiontype = { type: "TOGGLE_MENU" }

export const uiReducer = (state: UiState, action: UiActiontype): UiState => {
	switch (action.type) {
		case "TOGGLE_MENU":
			return {
				...state,
				isMenuOpen: !state.isMenuOpen,
			}

		default:
			return state
	}
}
