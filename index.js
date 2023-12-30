const http = require("http")
const app = require("./app")
const { port } = require("./config/kyes")

// Create Server
const server = http.createServer(app)

// Listen Server
server.listen(port, () => console.log(`Server is running on Port ${port}`))