import { useContext, useState } from "react"
import { useRouter } from "next/router"
import NextLink from "next/link"

import { AppBar, Badge, Box, Button, IconButton, Input, InputAdornment, Link, Toolbar, Typography } from "@mui/material"
import { ClearOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"

import { UiContext } from "../../context"

export default function Navbar() {
	const [searchTerm, setSearchTerm] = useState("")
	const [isSearchVisible, setIsSearchVisible] = useState(false)

	const { toggleMenu } = useContext(UiContext)

	const { asPath, push } = useRouter()

	const onSearchTerm = () => {
		if (searchTerm.trim().length === 0) return
		push(`/search/${searchTerm}`)
	}

	return (
		<AppBar>
			<nav>
				<Toolbar>
					<NextLink href={"/"} passHref className='link'>
						<Link component={"span"}>
							<Typography variant='h6'>Next Commerce</Typography>
						</Link>
					</NextLink>

					<Box flex={1} />

					<Box sx={{ display: isSearchVisible ? "none" : { xs: "none", sm: "block" } }} className='fadeIn'>
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

					{/* Pantallas pantallas grandes */}
					{isSearchVisible ? (
						<Input
							sx={{ display: { xs: "none", sm: "flex" } }}
							className='fadeIn'
							autoFocus
							value={searchTerm}
							onChange={e => setSearchTerm(e.target.value)}
							onKeyPress={e => (e.key === "Enter" ? onSearchTerm() : null)}
							type='text'
							placeholder='Search...'
							endAdornment={
								<InputAdornment position='end'>
									<IconButton onClick={() => setIsSearchVisible(false)}>
										<ClearOutlined />
									</IconButton>
								</InputAdornment>
							}
						/>
					) : (
						<IconButton
							onClick={() => setIsSearchVisible(true)}
							className='fadeIn'
							sx={{ display: { xs: "none", sm: "flex" } }}
						>
							<SearchOutlined />
						</IconButton>
					)}

					{/* Pantallas pequeñas */}
					<IconButton sx={{ display: { xs: "flex", sm: "none" } }} onClick={toggleMenu}>
						<SearchOutlined />
					</IconButton>

					<NextLink href='/cart' passHref>
						<Link component={"span"}>
							<IconButton>
								<Badge badgeContent={2} color='secondary'>
									<ShoppingCartOutlined />
								</Badge>
							</IconButton>
						</Link>
					</NextLink>

					<Button onClick={toggleMenu}>Menu</Button>
				</Toolbar>
			</nav>
		</AppBar>
	)
}
