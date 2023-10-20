//This js file contains EXPRESS FRAMEWORK SPECIFIC CODE

import express from "express"
import api from "./routes/api.js"

const app = express()

//using express middleware : 'express.json' . So that we can avoid code duplication of json-parsing  and json-stringify
app.use(express.json())

//mounting Express-Router on the app
app.use("/", api)


export default app
