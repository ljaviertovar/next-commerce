import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import { CartList, OrderSummary } from "../../components/cart"

export default function CartPage() {
	return (
		<ShopLayout title='Carrito' pageDescription={"Carrito de compras de la tienda"}>
			<Typography variant='h1' sx={{ mb: 2 }}>
				Shopping cart
			</Typography>

			<Grid container>
				<Grid item xs={12} sm={7}>
					<CartList editable />
				</Grid>
				<Grid item xs={12} sm={5}>
					<Card className='summary-card'>
						<CardContent>
							<Typography variant='h2'>Order</Typography>
							<Divider sx={{ my: 1 }} />

							<OrderSummary />

							<Box sx={{ mt: 3 }}>
								<Button color='secondary' className='circular-btn' fullWidth>
									Checkout
								</Button>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</ShopLayout>
	)
}
