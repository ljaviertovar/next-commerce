import NextLink from "next/link"
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../../components/layouts"

export default function LoginPage() {
	return (
		<AuthLayout title={"Ingresar"}>
			<Box sx={{ width: 350, padding: "10px 20px" }}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant='h1' component='h1'>
							Log in
						</Typography>
					</Grid>

					<Grid item xs={12}>
						<TextField label='Correo' variant='filled' fullWidth />
					</Grid>
					<Grid item xs={12}>
						<TextField label='Contraseña' type='password' variant='filled' fullWidth />
					</Grid>

					<Grid item xs={12}>
						<Button color='secondary' className='circular-btn' size='large' fullWidth>
							Ingresar
						</Button>
					</Grid>

					<Grid item xs={12} display='flex' justifyContent='end'>
						<NextLink href='/auth/register' passHref>
							<Link underline='always'>You don't have an account?</Link>
						</NextLink>
					</Grid>
				</Grid>
			</Box>
		</AuthLayout>
	)
}
