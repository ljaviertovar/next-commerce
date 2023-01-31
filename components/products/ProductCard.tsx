import NextLink from "next/link"
import { Box, Card, CardActionArea, CardMedia, Chip, Grid, Link, Typography } from "@mui/material"

import { Product } from "../../interfaces/products.interface"
import { useMemo, useState } from "react"

interface Props {
	product: Product
}

export default function ProductCard({ product }: Props) {
	const [isHovered, setIsHovered] = useState(false)
	const [isImageLoaded, setIsImageLoaded] = useState(false)

	const productImage = useMemo(() => {
		return isHovered ? `/products/${product.images[1]}` : `/products/${product.images[0]}`
	}, [isHovered, product.images])

	return (
		<Grid item xs={6} sm={4} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<Card>
				<CardActionArea>
					{product.inStock === 0 && (
						<Chip
							color='warning'
							label='Sold out'
							sx={{ position: "absolute", zIndex: 99, top: "10px", left: "10px" }}
						/>
					)}

					<NextLink href={`/product/${product.slug}`} passHref prefetch={false}>
						<Link>
							<CardMedia
								component='img'
								image={productImage}
								alt={product.title}
								className='fadeIn'
								onLoad={() => setIsImageLoaded(true)}
							/>
						</Link>
					</NextLink>
				</CardActionArea>
			</Card>

			<Box sx={{ mt: 1, display: isImageLoaded ? "block" : "none" }} className='fadeIn'>
				<Typography fontWeight={700}>{product.title}</Typography>
				<Typography fontWeight={500}>${product.price}</Typography>
			</Box>
		</Grid>
	)
}
