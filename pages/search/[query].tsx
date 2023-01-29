import type { NextPage, GetServerSideProps } from "next"
import { Typography, Box } from "@mui/material"

import { ShopLayout } from "../../components/layouts"
import { ProductList } from "../../components/products"

import { dbProducts } from "../../database"

import { Product as IProduct } from "../../interfaces"

interface Props {
	products: IProduct[]
	foundProducts: boolean
	query: string
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
	return (
		<ShopLayout title={"Teslo-Shop - Search"} pageDescription={"Encuentra los mejores productos de Teslo aquí"}>
			<Typography variant='h1' component='h1'>
				Product search
			</Typography>

			{foundProducts ? (
				<Box display={"flex"} sx={{ mb: 4 }}>
					<Typography variant='h2' textTransform='capitalize'>
						{products.length} products found of:
					</Typography>
					<Typography variant='h2' sx={{ ml: 1 }} color='secondary'>
						{query}
					</Typography>
				</Box>
			) : (
				<Box sx={{ mb: 4 }}>
					<Box display={"flex"} sx={{ mb: 4 }}>
						<Typography variant='h2' textTransform='capitalize'>
							no products found of:
						</Typography>
						<Typography variant='h2' sx={{ ml: 1 }} color='secondary'>
							{query}
						</Typography>
					</Box>
					<Typography variant='h2'>See the newest products:</Typography>
				</Box>
			)}

			<ProductList products={products} />
		</ShopLayout>
	)
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const { query = "" } = params as { query: string }

	if (query.length === 0) {
		return {
			redirect: {
				destination: "/",
				permanent: true,
			},
		}
	}

	let products = await dbProducts.getProductsByTerm(query)
	const foundProducts = products.length > 0

	if (!foundProducts) {
		// products = await dbProducts.getAllProducts();
		products = await dbProducts.getProductsByTerm("shirt")
	}

	return {
		props: {
			products,
			foundProducts,
			query,
		},
	}
}

export default SearchPage
