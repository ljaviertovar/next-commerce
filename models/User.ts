import mongoose, { Schema, model, Model } from "mongoose"

import { User as UserType } from "../interfaces"

const userSchema = new Schema(
	{
		name: { type: String, require: true },
		email: { type: String, require: true, unique: true },
		password: { type: String, require: true },
		role: {
			type: String,
			require: true,
			enum: {
				values: ["admin", "client"],
				message: "{VALUE} invalid Role",
				default: "client",
			},
		},
	},
	{ timestamps: true }
)

const User: Model<UserType> = mongoose.models.User || model("User", userSchema)

export default User
