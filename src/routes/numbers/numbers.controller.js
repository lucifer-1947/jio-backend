function sum_of_evens(numbers = [1, 2, 3, 4, 5, 6]) {
	//using arrays -> reduce approach . It returns the final sum. [ Functional Programming ]
	return numbers.reduce(
		(sum, current) => (current % 2 === 0 ? sum + current : sum),
		0
	)
}

export function handleSumOfEvens(req, res) {
	const numbers = req.body

	if (!Array.isArray(numbers)) {
		return res.status(400).send("Please provide an array of numbers")
	}

	const sum = sum_of_evens(numbers)

	res.send({ sum })
}

console.log(sum_of_evens())
