import { Box, IconButton, Typography } from "@mui/material"
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material"

interface Props {
	currentValue: number
	updatedQuantity: (value: number) => void
	maxValue: number
}

export const ItemCounter: React.FC<Props> = ({ currentValue, updatedQuantity, maxValue }) => {
	const incrementValue = () => {
		if (currentValue < maxValue) updatedQuantity(currentValue + 1)
	}

	const decrementValue = () => {
		if (currentValue > 1) updatedQuantity(currentValue - 1)
	}

	return (
		<Box display='flex' alignItems='center'>
			<IconButton onClick={() => decrementValue()}>
				<RemoveCircleOutline />
			</IconButton>
			<Typography sx={{ width: 40, textAlign: "center" }}> {currentValue}</Typography>
			<IconButton onClick={() => incrementValue()}>
				<AddCircleOutline />
			</IconButton>
		</Box>
	)
}
