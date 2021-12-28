const express=require('express')
const logLocationController=require("../controllers/logLocationController")

const route =express.Router()

route.route("/gps_list").get(logLocationController.getLocationList)
route.route("/gps_add").post(logLocationController.addLocation)


module.exports=route