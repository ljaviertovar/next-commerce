import { Box, Button } from "@mui/material"
import { Size as ISize } from "../../interfaces/products.interface"

interface Props {
	selectedSize?: ISize
	sizes: ISize[]
}

export default function SizeSelector({ selectedSize, sizes }: Props) {
	return (
		<Box>
			{sizes.map(size => (
				<Button key={size} size='small' color={selectedSize === size ? "info" : "primary"}>
					{size}
				</Button>
			))}
		</Box>
	)
}
