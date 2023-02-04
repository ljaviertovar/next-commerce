export const formatCurrency = (value: number) => {
	const formatter = new Intl.NumberFormat("en-EU", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})

	return formatter.format(value)
}
