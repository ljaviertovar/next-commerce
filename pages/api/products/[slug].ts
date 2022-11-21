import type { NextApiRequest, NextApiResponse } from "next"
import { db } from "../../../database"
import { Product as TypeProduct } from "../../../interfaces"
import { Product } from "../../../models"

type Data = { message: string } | TypeProduct

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	switch (req.method) {
		case "GET":
			return getProductBySlug(req, res)

		default:
			return res.status(400).json({ message: "Bad request" })
	}
}

const getProductBySlug = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { slug } = req.query

	const condition = { slug }

	await db.connect()
	const product = await Product.findOne(condition).lean()
	await db.disconnect()

	if (!product) {
		return res.status(404).json({ message: "Product not found" })
	}

	res.status(200).json(product)
}
