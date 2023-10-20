import library, { Book } from "../../models/library.js"

export async function handleGetBooks(req, res) {
	try {
		res.json(library.list_books())
	} catch (error) {
		res.status(404).json({ error: error.message })
	}
}
export function handleGetBookInfo(req, res) {
	try {
		res.json(library.get_book_info(req.params.isbn))
	} catch (error) {
		res.status(404).json({ error: error.message })
	}
}

export async function handleAddBook(req, res) {
	const bookInfo = req.body

	if (!bookInfo.isbn || !bookInfo.title || !bookInfo.author)
		return res.status(400).json({
			error: "Missing required fields",
		})

	try {
		const book = Object.assign(new Book(), bookInfo, {
			isbn: `${bookInfo.isbn}`,
		})
		library.add_book(book)
		res.json(library.list_books())
	} catch (error) {
		res.status(404).json({ error: error.message })
	}
}

export async function handleDeleteBook(req, res) {
	try {
		library.remove_book(req.params.isbn)
		res.json(library.list_books())
	} catch (error) {
		res.status(404).json({ error: error.message })
	}
}
