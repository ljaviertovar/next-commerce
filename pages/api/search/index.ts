import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
	message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	return res.status(400).json({ message: "You must to specify a search term" })
}
