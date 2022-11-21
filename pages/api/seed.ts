import type { NextApiRequest, NextApiResponse } from "next"
import { db } from "../../database"
import { Product } from "../../models"

import { initialData } from "../../database/seedProducts"

type Data = {
	message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	if (process.env.NODE_ENV === "production") {
		return res.status(401).json({ message: "No authorized" })
	}

	await db.connect()

	await Product.deleteMany()
	await Product.insertMany(initialData.products)

	await db.disconnect()

	res.status(200).json({ message: "success!" })
}

export default handler
