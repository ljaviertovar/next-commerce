import { Box, Button } from "@mui/material"
import { Size as ISize, Size } from "../../interfaces/products.interface"

interface Props {
	selectedSize?: ISize
	sizes: ISize[]
	onSelectedSize: (size: Size) => void
}

export default function SizeSelector({ selectedSize, sizes, onSelectedSize }: Props) {
	return (
		<Box>
			{sizes.map(size => (
				<Button
					key={size}
					size='small'
					color={selectedSize === size ? "info" : "primary"}
					onClick={() => onSelectedSize(size)}
				>
					{size}
				</Button>
			))}
		</Box>
	)
}
