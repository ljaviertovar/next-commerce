import { useContext } from "react"
import { useRouter } from "next/router"
import NextLink from "next/link"

import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"

import { UiContext } from "../../context"

export default function Navbar() {
	const { toggleMenu } = useContext(UiContext)

	const { asPath } = useRouter()

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
						<Link underline='hover' component={"span"} color={asPath === "/category/men" ? "secondary" : "primary"}>
							Men
						</Link>
					</NextLink>
					<NextLink href='/category/women' className='link' passHref>
						<Link underline='hover' component={"span"} color={asPath === "/category/women" ? "secondary" : "primary"}>
							Women
						</Link>
					</NextLink>
					<NextLink href='/category/kids' className='link' passHref>
						<Link underline='hover' component={"span"} color={asPath === "/category/kids" ? "secondary" : "primary"}>
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

				<Button onClick={toggleMenu}>Menu</Button>
			</Toolbar>
		</AppBar>
	)
}
