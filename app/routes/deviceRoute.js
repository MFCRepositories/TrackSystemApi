const express=require('express')
const deviceController=require("../controllers/deviceController")

const route =express.Router()


route.route("/device_list").get(deviceController.getDevices)
route.route("/device_add").post(deviceController.addDevices)
route.route("/device_update/:id").patch(deviceController.updateDevices)
route.route("/device_delete/:id").delete(deviceController.deleteDevices)


module.exports=route