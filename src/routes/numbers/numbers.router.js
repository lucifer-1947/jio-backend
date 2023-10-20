import express from "express"
import { handleSumOfEvens } from "./numbers.controller.js"

const numbersRouter = express.Router()

numbersRouter.post("/", handleSumOfEvens)

export default numbersRouter
