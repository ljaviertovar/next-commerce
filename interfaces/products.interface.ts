export interface Product {
	_id?: string
	description: string
	images: string[]
	inStock: number
	price: number
	sizes: Size[]
	slug: string
	tags: string[]
	title: string
	type: ProductType
	gender: Gender
	createdAt?: string
	updatedAt?: string
}

export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL"

export type ProductType = "shirts" | "pants" | "hoodies" | "hats"

export type Gender = "men" | "women" | "kid" | "unisex"
