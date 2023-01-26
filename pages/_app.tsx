import type { AppProps } from "next/app"
import { SWRConfig } from "swr"

import { CssBaseline, ThemeProvider } from "@mui/material"
import { darkTheme } from "../themes/dark-theme"

import "../styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SWRConfig
			value={{
				// refreshInterval:5000,
				fetcher: (...args: [key: string]) => fetch(...args).then(res => res.json()),
			}}
		>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</SWRConfig>
	)
}
