import type { NextApiRequest, NextApiResponse } from "next"
import { db } from "../../../database"
import { User } from "../../../models"

import { getUserIdFromToken, signToken } from "../../../utils/jwt"

type Data =
	| {
			message: string
	  }
	| {
			token: string
			user: {
				name: string
				email: string
				role: string
			}
	  }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	switch (req.method) {
		case "GET":
			return validateJWT(req, res)

		default:
			res.status(400).json({ message: "Bad Request" })
	}
}

const validateJWT = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { token = "" } = req.cookies

	let userId = ""
	try {
		userId = await getUserIdFromToken(token)
	} catch (error) {
		return res.status(401).json({ message: "Unauthorize Token" })
	}

	await db.connect()
	const user = await User.findById(userId)

	await db.disconnect()

	if (!user) return res.status(400).json({ message: "User not found" })

	const { role, name, email, _id } = user

	return res.status(200).json({
		token: signToken(_id, email),
		user: {
			email,
			role,
			name,
		},
	})
}
