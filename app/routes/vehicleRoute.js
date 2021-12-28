const express=require('express')
const vehicleController=require("../controllers/vehicleController")

const route=express.Router()

route.route("/vehicle_list").get(vehicleController.getVehicle)
route.route("/vehicle_add").post(vehicleController.addVehicle)
route.route("/vehicle_update/:id").patch(vehicleController.updateVehicle)
route.route("/vehicle_delete/:id").delete(vehicleController.deleteVehicle)

module.exports=route