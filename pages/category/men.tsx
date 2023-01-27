import { Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import { ProductList } from "../../components/products"

import { useProducts } from "../../hooks"
import FullScreenLoading from "../../components/ui/FullScreenLoading"

export default function MenPage() {
	const { products, isLoading } = useProducts("/products?gender=men")

	console.log({ products })

	return (
		<ShopLayout title={"Men category"} pageDescription={"Find the best prodcuts of men."}>
			<Typography variant='h1' component='h1'>
				Men
			</Typography>
			<Typography variant='h2' sx={{ mb: 1 }}>
				All Products
			</Typography>

			{isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
		</ShopLayout>
	)
}
