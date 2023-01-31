import { GetStaticPaths, GetStaticProps } from "next"
import { Box, Button, Chip, Grid, Typography } from "@mui/material"

import { ShopLayout } from "../../components/layouts"
import { ProductSlideshow } from "../../components/products"
import { ItemCounter } from "../../components/ui/ItemCounter"
import SizeSelector from "../../components/products/SizeSelector"
import { Product as IProduct, Size } from "../../interfaces/products.interface"
import { dbProducts } from "../../database"
import { CartProductType } from "../../interfaces/cart.interface"
import { useState } from "react"

interface Props {
	product: IProduct
}

export default function ProductPage({ product }: Props) {
	const [tempCartProduct, setTempCartProduct] = useState<CartProductType>({
		_id: product._id,
		images: product.images[0],
		price: product.price,
		size: undefined,
		slug: product.slug,
		title: product.title,
		gender: product.gender,
		quantity: 1,
	})

	const onSelectedSize = (size: Size) => {
		setTempCartProduct({ ...tempCartProduct, size })
	}

	const onUpdateQuantity = (quantity: number) => {
		setTempCartProduct({ ...tempCartProduct, quantity })
	}

	const onAddToCart = () => {
		console.log({ tempCartProduct })
	}

	return (
		<ShopLayout title={product.title} pageDescription={product.description}>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={7}>
					<ProductSlideshow images={product.images} />
				</Grid>

				<Grid item xs={12} sm={5}>
					<Box display={"flex"} flexDirection={"column"}>
						<Typography variant='h1' component={"h1"}>
							{product.title}
						</Typography>
						<Typography variant='subtitle1' component={"h1"}>
							${product.price}
						</Typography>

						<Box sx={{ my: 2 }}>
							<Typography variant='subtitle2'>Quantity</Typography>
							<ItemCounter
								currentValue={tempCartProduct.quantity}
								updatedQuantity={onUpdateQuantity}
								maxValue={product.inStock}
							/>
							<SizeSelector selectedSize={tempCartProduct.size} sizes={product.sizes} onSelectedSize={onSelectedSize} />
						</Box>

						{product.inStock === 0 ? (
							<Chip label={"Sold out"} color='warning' variant='outlined' />
						) : (
							<Button color='secondary' className='circular-btn' onClick={() => onAddToCart()}>
								{tempCartProduct.size ? "Add to Cart" : "Select a size"}
							</Button>
						)}

						<Box sx={{ mt: 3 }}>
							<Typography variant='subtitle2'>Description</Typography>
							<Typography variant='body2'>{product.description}</Typography>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ShopLayout>
	)
}

//SSR
// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
// 	const { slug } = params as { slug: string }
// 	const product = await dbProduct.getProductBySlug(slug)

// 	if (!product) {
// 		return {
// 			redirect: {
// 				destination: "/",
// 				permanent: false,
// 			},
// 		}
// 	}

// 	return {
// 		props: {
// 			product,
// 		},
// 	}
// }

export const getStaticPaths: GetStaticPaths = async ctx => {
	const productSlugs = await dbProducts.getAllProductsSlugs()

	return {
		paths: productSlugs.map(({ slug }) => ({
			params: {
				slug,
			},
		})),
		fallback: "blocking",
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug = "" } = params as { slug: string }

	const product = await dbProducts.getProductBySlug(slug)

	if (!product) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		}
	}

	return {
		props: {
			product,
		},
	}
}
