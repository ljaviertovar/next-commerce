import type { NextApiRequest, NextApiResponse } from "next"
import { db } from "../../../database"
import { Product as TypeProduct } from "../../../interfaces"
import { Product } from "../../../models"

type Data = { message: string } | TypeProduct[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	switch (req.method) {
		case "GET":
			return searchProducts(req, res)

		default:
			return res.status(400).json({ message: "Bad request" })
	}
}

const searchProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	let { q = "" } = req.query

	if (q.length === 0) {
		return res.status(400).json({ message: "You must to specify a search term" })
	}

	q = q.toString().toLowerCase()

	db.connect()
	const products = await Product.find({ $text: { $search: q } })
		.select("title images price inStock slug -_id")
		.lean()
	db.disconnect()

	return res.status(200).json(products)
}
