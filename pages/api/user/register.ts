import type { NextApiRequest, NextApiResponse } from "next"
import { db } from "../../../database"
import { User } from "../../../models"
import bcrypt from "bcryptjs"
import { signToken } from "../../../utils/jwt"
import { validations } from "../../../utils"

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
		case "POST":
			return registerUser(req, res)

		default:
			res.status(400).json({ message: "Bad Request" })
	}
}

const registerUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { name = "", email = "", password = "" } = req.body as { email: string; name: string; password: string }

	if (password.length < 6) {
		console.log(password.length)
		//TODO: add more validation for pass
		return res.status(400).json({ message: "Password must have minimum 6 characteres" })
	}

	if (name.length < 3) {
		//TODO: add more validation for name
		return res.status(400).json({ message: "Name must have minimum 2 characteres" })
	}

	if (!validations.isValidEmail(email)) {
		return res.status(400).json({ message: "Invalid Email" })
	}

	await db.connect()
	const user = await User.findOne({ email })

	//TODO: limit retries of register
	if (user) {
		await db.disconnect()
		return res.status(400).json({ message: "User already exist!" })
	}

	const newUser = new User({
		name,
		email: email.toLocaleLowerCase(),
		password: bcrypt.hashSync(password),
		role: "client",
	})

	try {
		await newUser.save({ validateBeforeSave: true })
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: "Error Server" })
	}

	const { _id, role } = newUser

	const token = signToken(_id, email)

	return res.status(200).json({
		token,
		user: {
			email,
			role,
			name,
		},
	})
}
