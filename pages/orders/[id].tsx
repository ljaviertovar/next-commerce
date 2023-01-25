import NextLink from "next/link"

import { ShopLayout } from "../../components/layouts"
import { CartList, OrderSummary } from "../../components/cart"

import { Link, Box, Card, CardContent, Divider, Grid, Typography, Chip } from "@mui/material"
import { CreditCardOffOutlined, CreditScoreOutlined } from "@mui/icons-material"

export default function OrderPage() {
	return (
		<ShopLayout title='Order summary 123671523' pageDescription={"Order summary"}>
			<Typography variant='h1' component='h1'>
				Order: ABC123
			</Typography>

			{/* <Chip
            sx={{ my: 2 }}
            label="Pendiente de pago"
            variant='outlined'
            color="error"
            icon={ <CreditCardOffOutlined /> }
        /> */}
			<Chip sx={{ my: 2 }} label='Paid Order' variant='outlined' color='success' icon={<CreditScoreOutlined />} />

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
									<Link underline='always' component={"span"}>
										Edit
									</Link>
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
									<Link underline='always' component={"span"}>
										Edit
									</Link>
								</NextLink>
							</Box>

							<OrderSummary />

							<Box sx={{ mt: 3 }}>
								{/* TODO */}
								<h1>Pay</h1>

								<Chip
									sx={{ my: 2 }}
									label='Paid Order'
									variant='outlined'
									color='success'
									icon={<CreditScoreOutlined />}
								/>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</ShopLayout>
	)
}
