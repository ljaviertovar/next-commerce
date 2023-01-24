import { Typography } from "@mui/material"
import { ShopLayout } from "../components/layouts"

export default function Home() {
	return (
		<ShopLayout title={"Next commerce - Home"} pageDescription={"Find the best prodcuts here"}>
			<Typography variant='h1' component='h1'>
				Store
			</Typography>
			<Typography variant='h2' sx={{ mb: 1 }}>
				All Products
			</Typography>
		</ShopLayout>
	)
}
