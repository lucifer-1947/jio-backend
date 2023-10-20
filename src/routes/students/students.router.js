import express from "express"
import { handleSortNames } from "./students.controller.js"

const studentsRouter = express.Router()

studentsRouter.post("/", handleSortNames)

export default studentsRouter
