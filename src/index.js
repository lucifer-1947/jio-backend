//NOTE: always at top , so all below code can utilise the environment variables
import * as dotenv from 'dotenv'
dotenv.config()


import http from "http"
import app from "./app.js"

const PORT = process.env.PORT || 3000 

const server = http.createServer(app)

server.listen(PORT, () =>
	console.log(`web server activated and listening at port:${PORT}`)
)
