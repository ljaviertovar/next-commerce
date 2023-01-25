import { Card, CardActionArea, CardMedia, Grid } from "@mui/material"

import { Product } from "../../interfaces/products.interface"

interface Props {
	product: Product
}

export default function ProductCard({ product }: Props) {
	return (
		<Grid item xs={6} sm={4}>
			<Card>
				<CardActionArea>
					<CardMedia component='img' image={`products/${product.images[0]}`} alt={product.title} />
				</CardActionArea>
			</Card>
		</Grid>
	)
}
