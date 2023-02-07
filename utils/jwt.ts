import jwt from "jsonwebtoken"

export const signToken = (_id: string, email: string) => {
	if (!process.env.JWT_SECRET_SEED) throw new Error("No JWT Seed found")

	return jwt.sign({ _id, email }, process.env.JWT_SECRET_SEED, { expiresIn: "30d" })
}

export const getUserIdFromToken = (token: string): Promise<string> => {
	if (!process.env.JWT_SECRET_SEED) throw new Error("No JWT Seed found")

	return new Promise((resolve, reject) => {
		try {
			jwt.verify(token, process.env.JWT_SECRET_SEED || "", (err, payload) => {
				if (err) reject("Invalid JWT")
				const { _id } = payload as { _id: string }

				resolve(_id)
			})
		} catch (error) {
			reject("Invalid JWT")
		}
	})
}
