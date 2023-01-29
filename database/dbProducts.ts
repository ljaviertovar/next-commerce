import { db } from "."
import { Product } from "../models"
import { Product as IProduct } from "../interfaces"
import { LensSharp } from "@mui/icons-material"
import { disconnect } from "./db"

export const getProductBySlug = async (slug: string): Promise<IProduct | null> => {
	await db.connect()

	const product = await Product.findOne({ slug }).lean()

	await db.disconnect()

	if (!product) return null

	return JSON.parse(JSON.stringify(product))
}

interface ProductSlugs {
	slug: string
}
export const getAllProductsSlugs = async (): Promise<ProductSlugs[]> => {
	await db.connect()
	const slugs = await Product.find().select("slug -_id").lean()
	await db.disconnect()

	return slugs
}