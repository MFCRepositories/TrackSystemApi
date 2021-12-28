
const pgPool = require("./../adapters/database/postgreSql");

exports.getVehicle = async (req, res) => {
    try {
      const vehicleList = await pgPool.query("SELECT * FROM vehicles");
  
      const vehicles = vehicleList.rows;
  
      res.status(200).json(vehicles);
    } catch (error) {
      res.status(401).send(error);
    }
  };
exports.addVehicle=async (req, res) =>{
  const short=req.body
    try {
       
      await pgPool.query(`insert into vehicles(vehicle_plate,current_status,is_active)
                       values('${short.vehicle_plate}', ${short.current_status}, ${short.is_active})`)
        res.send(`Vehicle Added Successfully!`)
    }
    catch (error){
        res.status(401).send(error.message)
    }

};

 exports.updateVehicle=async  (req, res)=> {
  const short=req.body
  const id = req.params.id
    try {
         
        await pgPool.query(`UPDATE vehicles SET vehicle_plate='${short.vehicle_plate}', current_status=${short.current_status}, is_active=${short.is_active} where id=${id}`)
        res.send(" Vehicle Update Successfully!")
    }
    catch (error){
        res.status(401).send(error.message)
    }
}
exports.deleteVehicle=async  (req, res)=> {

  const id = req.params.id
    try {
        await pgPool.query(`delete from vehicles where id=${id}`)
        res.send("Vehicle Delete Successfully!")
    }
    catch (error){
        res.status(401).send(error.message)
    }
}


