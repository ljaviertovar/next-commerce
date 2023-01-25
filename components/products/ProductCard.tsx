import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from "@mui/material"

import { Product } from "../../interfaces/products.interface"
import { useMemo, useState } from "react"

interface Props {
	product: Product
}

export default function ProductCard({ product }: Props) {
	const [isHovered, setIsHovered] = useState(false)

	const productImage = useMemo(() => {
		return isHovered ? `products/${product.images[1]}` : `products/${product.images[0]}`
	}, [isHovered, product.images])

	return (
		<Grid item xs={6} sm={4} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<Card>
				<CardActionArea>
					<CardMedia component='img' image={productImage} alt={product.title} className='fadeIn' />
				</CardActionArea>
			</Card>

			<Box sx={{ mt: 1 }} className='fadeIn'>
				<Typography fontWeight={700}>{product.title}</Typography>
				<Typography fontWeight={500}>${product.price}</Typography>
			</Box>
		</Grid>
	)
}
