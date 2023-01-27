import { Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import { ProductList } from "../../components/products"

import { useProducts } from "../../hooks"
import FullScreenLoading from "../../components/ui/FullScreenLoading"

export default function KidsPage() {
	const { products, isLoading } = useProducts("/products?gender=kids")

	console.log({ products })

	return (
		<ShopLayout title={"Men category"} pageDescription={"Find the best prodcuts of kids."}>
			<Typography variant='h1' component='h1'>
				Kids
			</Typography>
			<Typography variant='h2' sx={{ mb: 1 }}>
				All Products
			</Typography>

			{isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
		</ShopLayout>
	)
}
