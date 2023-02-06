import { Grid } from "@mui/material"
import ProductCard from "./ProductCard"

import { Product as ProductType } from "../../interfaces/products.interface"

interface Props {
	products: ProductType[]
}

export default function ProductList({ products }: Props) {
	return (
		<Grid container spacing={4}>
			{products.map(product => (
				<ProductCard product={product} key={product.slug} />
			))}
		</Grid>
	)
}
