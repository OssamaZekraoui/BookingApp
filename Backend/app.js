const express = require("express")
const app = express()

//----------api----------
app.use(express.json())
const hotels = require("./routes/hotelRoutes")
app.use("/api/v1",hotels)

const hotel = require("./routes/hotelRoutes")
app.use("/api/v1",hotel)

module.exports = app