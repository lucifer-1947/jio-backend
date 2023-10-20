import express from "express"
import {
	handleAddBook,
	handleDeleteBook,
	handleGetBookInfo,
	handleGetBooks,
} from "./books.controller.js"

const booksRouter = express.Router()

booksRouter.get("/", handleGetBooks)
booksRouter.get("/:isbn", handleGetBookInfo)

booksRouter.post("/", handleAddBook)

booksRouter.delete("/:isbn", handleDeleteBook)

export default booksRouter
