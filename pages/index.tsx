import { Typography } from "@mui/material"
import { ShopLayout } from "../components/layouts"
import { ProductList } from "../components/products"

import { useProducts } from "../hooks"
import FullScreenLoading from "../components/ui/FullScreenLoading"

export default function HomePage() {
	const { products, isLoading } = useProducts("/products")

	console.log({ products })

	return (
		<ShopLayout title={"Next commerce - Home"} pageDescription={"Find the best prodcuts here"}>
			<Typography variant='h1' component='h1'>
				Store
			</Typography>
			<Typography variant='h2' sx={{ mb: 1 }}>
				All Products
			</Typography>

			{isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
		</ShopLayout>
	)
}
