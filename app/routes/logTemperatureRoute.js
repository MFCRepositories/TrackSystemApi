const express=require('express')
const logTemperatureController=require("../controllers/logTemperatureController")

const route =express.Router()


route.route("/temp_list").get(logTemperatureController.getTempList)
route.route("/temp_add").post(logTemperatureController.addTemp)



module.exports=route