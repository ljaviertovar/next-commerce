import bcrypt from "bcryptjs"

interface SeedUser {
	name: string
	email: string
	password: string
	role: string
}

interface SeedData {
	users: SeedUser[]
}

export const usersInitialData: SeedData = {
	users: [
		{
			name: "admin user",
			email: "admin@next.com",
			password: bcrypt.hashSync("654321"),
			role: "admin",
		},
		{
			name: "client user",
			email: "client@next.com",
			password: bcrypt.hashSync("123456"),
			role: "client",
		},
	],
}
