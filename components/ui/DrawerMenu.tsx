import { useContext, useState } from "react"
import { useRouter } from "next/router"

import {
	Box,
	Divider,
	Drawer,
	IconButton,
	Input,
	InputAdornment,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ListSubheader,
} from "@mui/material"
import {
	AccountCircleOutlined,
	AdminPanelSettings,
	CategoryOutlined,
	ConfirmationNumberOutlined,
	EscalatorWarningOutlined,
	FemaleOutlined,
	LoginOutlined,
	MaleOutlined,
	SearchOutlined,
	VpnKeyOutlined,
} from "@mui/icons-material"

import { UiContext } from "../../context"

export default function DrawerMenu() {
	const [searchTerm, setSearchTerm] = useState("")

	const { isMenuOpen, toggleMenu } = useContext(UiContext)

	const router = useRouter()

	const onSearchTerm = () => {
		if (searchTerm.trim().length === 0) return
		navigateTo(`/search/${searchTerm}`)
	}

	const navigateTo = (url: string) => {
		toggleMenu()
		router.push(url)
	}

	return (
		<Drawer
			open={isMenuOpen}
			anchor='right'
			sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
			onClose={toggleMenu}
		>
			<Box sx={{ width: 250, paddingTop: 5 }}>
				<List>
					<ListItem>
						<Input
							autoFocus
							value={searchTerm}
							onChange={e => setSearchTerm(e.target.value)}
							onKeyPress={e => (e.key === "Enter" ? onSearchTerm() : null)}
							type='text'
							placeholder='Buscar...'
							endAdornment={
								<InputAdornment position='end'>
									<IconButton aria-label='toggle password visibility'>
										<SearchOutlined />
									</IconButton>
								</InputAdornment>
							}
						/>
					</ListItem>

					<ListItemButton>
						<ListItemIcon>
							<AccountCircleOutlined />
						</ListItemIcon>
						<ListItemText primary={"Perfil"} />
					</ListItemButton>

					<ListItemButton>
						<ListItemIcon>
							<ConfirmationNumberOutlined />
						</ListItemIcon>
						<ListItemText primary={"Mis Ordenes"} />
					</ListItemButton>

					<ListItemButton sx={{ display: { xs: "", sm: "none" } }} onClick={() => navigateTo("/category/men")}>
						<ListItemIcon>
							<MaleOutlined />
						</ListItemIcon>
						<ListItemText primary={"Men"} />
					</ListItemButton>

					<ListItemButton sx={{ display: { xs: "", sm: "none" } }} onClick={() => navigateTo("/category/women")}>
						<ListItemIcon>
							<FemaleOutlined />
						</ListItemIcon>
						<ListItemText primary={"women"} />
					</ListItemButton>

					<ListItemButton sx={{ display: { xs: "", sm: "none" } }} onClick={() => navigateTo("/category/kids")}>
						<ListItemIcon>
							<EscalatorWarningOutlined />
						</ListItemIcon>
						<ListItemText primary={"Kids"} />
					</ListItemButton>

					<ListItemButton>
						<ListItemIcon>
							<VpnKeyOutlined />
						</ListItemIcon>
						<ListItemText primary={"Ingresar"} />
					</ListItemButton>

					<ListItemButton>
						<ListItemIcon>
							<LoginOutlined />
						</ListItemIcon>
						<ListItemText primary={"Salir"} />
					</ListItemButton>

					{/* Admin */}
					<Divider />
					<ListSubheader>Admin Panel</ListSubheader>

					<ListItemButton>
						<ListItemIcon>
							<CategoryOutlined />
						</ListItemIcon>
						<ListItemText primary={"Productos"} />
					</ListItemButton>
					<ListItemButton>
						<ListItemIcon>
							<ConfirmationNumberOutlined />
						</ListItemIcon>
						<ListItemText primary={"Ordenes"} />
					</ListItemButton>

					<ListItemButton>
						<ListItemIcon>
							<AdminPanelSettings />
						</ListItemIcon>
						<ListItemText primary={"Usuarios"} />
					</ListItemButton>
				</List>
			</Box>
		</Drawer>
	)
}
