import { db } from "."
import { Product } from "../models"
import { Product as ProductType } from "../interfaces"

export const getProductBySlug = async (slug: string): Promise<ProductType | null> => {
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

export const getProductsByTerm = async (term: string): Promise<ProductType[]> => {
	term = term.toString().toLowerCase()

	await db.connect()
	const prducts = await Product.find({ $text: { $search: term } })
		.select("title images price inStock slug -_id")
		.lean()
	await db.disconnect()

	return prducts
}
