import mongoose, { Schema, model, Model } from "mongoose"
import { Product } from "../interfaces"

const productSchema = new Schema(
	{
		description: { type: String, require: true },
		images: [{ type: String }],
		inStock: { type: Number, require: true, default: 0 },
		price: { type: Number, require: true, default: 0 },
		sizes: [
			{
				type: String,
				enum: {
					values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
					message: "{VALUE} invalid size",
				},
			},
		],
		slug: { type: String, require: true, unique: true },
		tags: [{ type: String }],
		title: { type: String, require: true },
		type: {
			type: String,
			enum: {
				values: ["shirts", "pants", "hoodies", "hats"],
				message: "{VALUE} invalid type",
			},
		},
		gender: {
			type: String,
			enum: {
				values: ["men", "women", "kid", "unisex"],
				message: "{VALUE} invalid gender",
			},
		},
	},
	{ timestamps: true }
)

productSchema.index({ title: "text", tags: "text" })

const Product: Model<Product> = mongoose.models.Product || model("Product", productSchema)
export default Product
