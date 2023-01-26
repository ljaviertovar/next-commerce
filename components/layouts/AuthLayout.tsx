import Head from "next/head"
import { Box } from "@mui/material"

interface Props {
	children: React.ReactNode | React.ReactNode[]
	title: string
}

export default function AuthLayout({ children, title }: Props) {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<main>
				<Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)'>
					{children}
				</Box>
			</main>
		</>
	)
}
