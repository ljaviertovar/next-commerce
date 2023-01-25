import NextLink from "next/link"
import { ShopLayout } from "../../components/layouts"
import { CartList, OrderSummary } from "../../components/cart"

import { Link, Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material"

export default function SummaryPage() {
	return (
		<ShopLayout title='Order Summary' pageDescription={"Order Summary"}>
			<Typography variant='h1' component='h1'>
				Order Summary
			</Typography>

			<Grid container>
				<Grid item xs={12} sm={7}>
					<CartList />
				</Grid>
				<Grid item xs={12} sm={5}>
					<Card className='summary-card'>
						<CardContent>
							<Typography variant='h2'>Summary (3 items)</Typography>
							<Divider sx={{ my: 1 }} />

							<Box display='flex' justifyContent='space-between'>
								<Typography variant='subtitle1'>Delivery Address</Typography>
								<NextLink href='/checkout/address' passHref>
									<Link underline='always'>Edit</Link>
								</NextLink>
							</Box>

							<Typography>Fernando Herrera</Typography>
							<Typography>323 Algun lugar</Typography>
							<Typography>Stittsville, HYA 23S</Typography>
							<Typography>Canadá</Typography>
							<Typography>+1 23123123</Typography>

							<Divider sx={{ my: 1 }} />

							<Box display='flex' justifyContent='end'>
								<NextLink href='/cart' passHref>
									<Link underline='always'>Edit</Link>
								</NextLink>
							</Box>

							<OrderSummary />

							<Box sx={{ mt: 3 }}>
								<Button color='secondary' className='circular-btn' fullWidth>
									Confirm order
								</Button>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</ShopLayout>
	)
}
