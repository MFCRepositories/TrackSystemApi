const pgPool = require("./../adapters/database/postgreSql");

exports.getDevices = async (req, res) => {
    try {
      const deviceList = await pgPool.query("SELECT * FROM devices");
  
      const devices = deviceList.rows;
  
      res.status(200).json(devices);
    } catch (error) {
      res.status(401).send(error);
    }
  };
exports.addDevices=async (req, res) =>{
  const short =req.body
    try {
       
      await pgPool.query(`insert into devices(vehicle_id,device_type_id,device_name,is_online,is_active) 
      values(${short.vehicle_id}, ${short.device_type_id}, '${short.device_name}',${short.is_online},${short.is_active})`)
        res.send(` Device Added Successfully!`)
    }
    catch (error){
        res.status(401).send(error.message)
    }

};

 exports.updateDevices=async  (req, res)=> {
  const short =req.body
  const id=req.params.id
    try {
         
        await pgPool.query(`update devices set vehicle_id=${short.vehicle_id},device_type_id=${short.device_type_id},device_name='${short.device_name}',is_online=${short.is_online},is_active=${short.is_active} where id=${id}`)
        res.send(" Device Update Successfully!")
    }
    catch (error){
        res.status(401).send(error.message)
    }
}
exports.deleteDevices=async  (req, res)=> {
const id=req.params.id
    try {
        await pgPool.query(`delete from devices where id=${id}`)
        res.send(" Device Delete Successful!")
    }
    catch (error){
        res.status(401).send(error.message)
    }
}


