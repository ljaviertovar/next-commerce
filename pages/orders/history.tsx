import NextLink from "next/link"

import { Typography, Grid, Chip, Link } from "@mui/material"
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"

import { ShopLayout } from "../../components/layouts"

const columns: GridColDef[] = [
	{ field: "id", headerName: "ID", width: 100 },
	{ field: "fullname", headerName: "Full name", width: 300 },

	{
		field: "paid",
		headerName: "Paid",
		description: "Displays information on whether the order is paid or unpaid",
		width: 200,
		renderCell: (params: GridValueGetterParams) => {
			return params.row.paid ? (
				<Chip color='success' label='Paid' variant='outlined' />
			) : (
				<Chip color='error' label='Unpaid' variant='outlined' />
			)
		},
	},
	{
		field: "orden",
		headerName: "Order",
		width: 200,
		sortable: false,
		renderCell: (params: GridValueGetterParams) => {
			return (
				<NextLink href={`/orders/${params.row.id}`} passHref>
					<Link underline='always' component={"span"}>
						View order
					</Link>
				</NextLink>
			)
		},
	},
]

const rows = [
	{ id: 1, paid: true, fullname: "Fernando Herrera" },
	{ id: 2, paid: false, fullname: "Melissa Flores" },
	{ id: 3, paid: true, fullname: "Hernando Vallejo" },
	{ id: 4, paid: false, fullname: "Emin Reyes" },
	{ id: 5, paid: false, fullname: "Eduardo Rios" },
	{ id: 6, paid: true, fullname: "Natalia Herrera" },
]

export default function HistoryPage() {
	return (
		<ShopLayout title={"Order history"} pageDescription={"Order history"}>
			<Typography variant='h1' component='h1' sx={{ mb: 2 }}>
				Order history
			</Typography>

			<Grid container>
				<Grid item xs={12} sx={{ height: 650, width: "100%" }}>
					<DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[10]} />
				</Grid>
			</Grid>
		</ShopLayout>
	)
}
