import { Gender, Size } from "./products.interface"

export interface CartProductType {
	_id?: string
	images: string
	price: number
	size: Size
	slug: string
	title: string
	gender: Gender
	quantity: number
}
