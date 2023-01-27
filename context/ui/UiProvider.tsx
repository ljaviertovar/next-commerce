import { useReducer } from "react"
import { UiContext, uiReducer } from "./"

interface UiProviderType {
	children: React.ReactNode
}

export interface UiState {
	isMenuOpen: boolean
}

const INITIAL_STATE: UiState = {
	isMenuOpen: false,
}

export const UiProvider = ({ children }: UiProviderType) => {
	const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE)

	const toggleMenu = () => {
		dispatch({ type: "TOGGLE_MENU" })
	}

	return (
		<UiContext.Provider
			value={{
				...state,
				toggleMenu,
			}}
		>
			{children}
		</UiContext.Provider>
	)
}
