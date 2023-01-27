import { createContext } from "react"

interface Props {
	isMenuOpen: boolean
	toggleMenu: () => void
}

export const UiContext = createContext({} as Props)
