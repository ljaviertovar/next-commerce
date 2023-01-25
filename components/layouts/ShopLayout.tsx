import Head from "next/head"
import { DrawerMenu, Navbar } from "../ui"

interface Props {
	children: React.ReactNode | React.ReactNode[]
	title: string
	pageDescription: string
	imageUrl?: string
}

export default function ShopLayout({ children, imageUrl, pageDescription, title }: Props) {
	return (
		<>
			<Head>
				<title>{title}</title>

				<meta name='description' content={pageDescription} />

				<meta name='og:title' content={title} />
				<meta name='og:description' content={pageDescription} />

				{imageUrl && <meta name='og:image' content={imageUrl} />}
			</Head>

			<nav>
				<Navbar />
			</nav>

			<DrawerMenu />

			<main
				style={{
					margin: "80px auto",
					maxWidth: "1440px",
					padding: "0px 30px",
				}}
			>
				{children}
			</main>

			<footer></footer>
		</>
	)
}
