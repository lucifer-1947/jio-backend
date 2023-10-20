//We are going to use Express-Router to organize the API ENDPOINTS we develop for 'books' , 'students' & 'evens'

import express from "express"
import booksRouter from "./books/books.router.js"
import numbersRouter from "./numbers/numbers.router.js"
import studentsRouter from "./students/students.router.js"

const api = express.Router()

api.use("/students", studentsRouter)
api.use("/library", booksRouter)
api.use("/sum", numbersRouter)

api.all("/", (req, res) => {
	res.send("Excited to be part of JIO")
})

export default api
