import NextLink from "next/link"

import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"

export default function Navbar() {
	return (
		<AppBar>
			<Toolbar>
				<NextLink href={"/"} passHref className='link'>
					<Link component={"span"}>
						<Typography variant='h6'>Next Commerce</Typography>
					</Link>
				</NextLink>

				<Box flex={1} />

				<Box sx={{ display: { xs: "none", sm: "block" } }}>
					<NextLink href='/category/men' className='link' passHref>
						<Link underline='hover' component={"span"}>
							Men
						</Link>
					</NextLink>
					<NextLink href='/category/women' className='link' passHref>
						<Link underline='hover' component={"span"}>
							Women
						</Link>
					</NextLink>
					<NextLink href='/category/kids' className='link' passHref>
						<Link underline='hover' component={"span"}>
							Kids
						</Link>
					</NextLink>
				</Box>

				<Box flex={1} />

				<IconButton>
					<SearchOutlined />
				</IconButton>

				<NextLink href={"/"}>
					<IconButton>
						<Badge badgeContent={2} color='secondary'>
							<ShoppingCartOutlined />
						</Badge>
					</IconButton>
				</NextLink>

				<Button>Menu</Button>
			</Toolbar>
		</AppBar>
	)
}
