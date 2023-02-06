import type { NextApiRequest, NextApiResponse } from "next"

import { db } from "../../database"

import { Product, User } from "../../models"

import { productInitialData } from "../../database/seedProducts"
import { usersInitialData } from "../../database/seedUsers"

type Data = {
	message: string
}

//resets the data in the db
const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	if (process.env.NODE_ENV === "production") {
		return res.status(401).json({ message: "No authorized" })
	}

	await db.connect()

	await User.deleteMany()
	await User.insertMany(usersInitialData.users)

	await Product.deleteMany()
	await Product.insertMany(productInitialData.products)

	await db.disconnect()

	res.status(200).json({ message: "success!" })
}

export default handler
