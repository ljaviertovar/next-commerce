import { useContext } from "react"
import NextLink from "next/link"

import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material"

import { ItemCounter } from "../ui"

import { CartContext } from "../../context/cart/CartContext"

import { CartProductType } from "../../interfaces/cart.interface"
interface Props {
	editable?: boolean
}

export default function CartList({ editable = false }) {
	const { cart, updateCartQuantity } = useContext(CartContext)

	const onUpdatedQuantity = (product: CartProductType, quantity: number) => {
		product.quantity = quantity
		updateCartQuantity(product)
	}

	console.log({ cart })

	return (
		<>
			{cart.map(product => (
				<Grid container spacing={2} key={product.slug + product.size} sx={{ mb: 1 }}>
					<Grid item xs={3}>
						{/* <NextLink href={`/product/${product.slug}`} passHref>
							<Link component='div'> */}
						<CardActionArea component='div'>
							<CardMedia
								image={`/products/${product.image}`}
								component='img'
								sx={{ borderRadius: "5px" }}
								alt={product.title}
								title={product.title}
							/>
						</CardActionArea>
						{/* </Link>
						</NextLink> */}
					</Grid>
					<Grid item xs={7}>
						<Box display='flex' flexDirection='column'>
							<Typography variant='body1'>{product.title}</Typography>
							<Typography variant='body1'>
								Talla: <strong>{product.size}</strong>
							</Typography>

							{editable ? (
								<ItemCounter
									currentValue={product.quantity}
									updatedQuantity={value => onUpdatedQuantity(product, value)}
									maxValue={10}
								/>
							) : (
								<Typography variant='h5'>{product.quantity} item(s)</Typography>
							)}
						</Box>
					</Grid>
					<Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
						<Typography>{`$${product.price}`}</Typography>

						{editable && (
							<Button variant='text' color='secondary'>
								Remover
							</Button>
						)}
					</Grid>
				</Grid>
			))}
		</>
	)
}
