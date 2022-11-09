const express = require("express")
const router = express.Router()


const {getHotels , getHotel} = require("../controllers/hotelsController")


router.route("/hotels").get(getHotels)

router.route("/hotel/:id").get(getHotel)


module.exports = router