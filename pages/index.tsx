import { Typography } from "@mui/material"
import { ShopLayout } from "../components/layouts"
import { ProductList } from "../components/products"

import { Product as IProduct } from "../interfaces/products.interface"

import { initialData } from "../database"

export default function Home() {
	return (
		<ShopLayout title={"Next commerce - Home"} pageDescription={"Find the best prodcuts here"}>
			<Typography variant='h1' component='h1'>
				Store
			</Typography>
			<Typography variant='h2' sx={{ mb: 1 }}>
				All Products
			</Typography>

			<ProductList products={initialData.products as IProduct[]} />
		</ShopLayout>
	)
}
