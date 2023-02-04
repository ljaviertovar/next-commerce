import { useContext } from "react"
import { Grid, Typography } from "@mui/material"

import { CartContext } from "../../context/cart/CartContext"
import { formatCurrency } from "../../utils/currency"

export default function OrderSummary() {
	const { numberOfItems, total, subTotal, taxes } = useContext(CartContext)

	return (
		<Grid container>
			<Grid item xs={6}>
				<Typography>No. Products</Typography>
			</Grid>
			<Grid item xs={6} display='flex' justifyContent='end'>
				<Typography>{numberOfItems} items</Typography>
			</Grid>

			<Grid item xs={6}>
				<Typography>SubTotal</Typography>
			</Grid>
			<Grid item xs={6} display='flex' justifyContent='end'>
				<Typography>{formatCurrency(subTotal)}</Typography>
			</Grid>

			<Grid item xs={6}>
				<Typography>Taxes ({Number(process.env.NEXT_PUBLIC_TAX_RATE) * 100}%)</Typography>
			</Grid>
			<Grid item xs={6} display='flex' justifyContent='end'>
				<Typography>{formatCurrency(taxes)}</Typography>
			</Grid>

			<Grid item xs={6} sx={{ mt: 2 }}>
				<Typography variant='subtitle1'>Total:</Typography>
			</Grid>
			<Grid item xs={6} sx={{ mt: 2 }} display='flex' justifyContent='end'>
				<Typography variant='subtitle1'>{formatCurrency(total)}</Typography>
			</Grid>
		</Grid>
	)
}
