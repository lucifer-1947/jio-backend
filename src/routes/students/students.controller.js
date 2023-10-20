async function handleSortNames(req, res) {


	if(!Array.isArray(req.body)){
        res.status(200).send("Please provide any array of names to get sorted ")
    }
		
    const names = Array.from(req.body)

    res.status(200).json(names.sort())
    
}

export { handleSortNames }
