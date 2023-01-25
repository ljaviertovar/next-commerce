import { Grid } from "@mui/material"
import ProductCard from "./ProductCard"

import { Product as IProduct } from "../../interfaces/products.interface"

interface Props {
	products: IProduct[]
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
