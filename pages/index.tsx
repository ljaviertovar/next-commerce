import { Card, CardActionArea, CardMedia, Grid, Typography } from "@mui/material"
import { ShopLayout } from "../components/layouts"

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

			<Grid container spacing={4}>
				{initialData.products.map(product => (
					<Grid item xs={6} sm={4} key={product.slug}>
						<Card>
							<CardActionArea>
								<CardMedia component='img' image={`products/${product.images[0]}`} alt={product.title} />
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
		</ShopLayout>
	)
}
