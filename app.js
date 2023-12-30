const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const morgan = require("morgan")

dotenv.config()
const connectMongoDb = require("./init/mongodb")
const {authRoute} = require("./routes")
const {errorHandler} = require("./middlewares")
const notFound = require("./controller/notfound")

// init app
const app = express()

// Connect Databse 
connectMongoDb()

// third party middleware
app.use(express.json({ limit : "500mb"}))
app.use(bodyParser.urlencoded({ limit:"500mb", extended:true}))
app.use(morgan("dev"))

// route section
app.use("/api/v1/auth", authRoute)
// not found route
app.use("*", notFound)

// error handler
app.use(errorHandler)

module.exports = app