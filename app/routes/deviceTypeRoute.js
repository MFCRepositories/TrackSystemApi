const express=require('express')
const deviceTypeController=require("../controllers/deviceTypeController")

const route =express.Router()

route.route("/deviceType_list").get(deviceTypeController.getDeviceType)
route.route("/deviceType_add").post(deviceTypeController.addDeviceType)
route.route("/deviceType_delete/:id").delete(deviceTypeController.deleteDeviceType)

module.exports=route