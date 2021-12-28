const pgPool = require("./../adapters/database/postgreSql");

exports.getDeviceType = async (req, res) => {
    try {
      const devicesList = await pgPool.query("SELECT * FROM devices_type");
      const devices = devicesList.rows;
  
      res.status(200).json(devices);
    } catch (error) {
      res.status(401).send(error);
    }
  };
exports.addDeviceType=async (req, res) =>{
  const short= req.body
    try {
       
      await pgPool.query(`insert into devices_type(device_name,device_description,is_active) 
      values('${short.device_name}', '${short.device_description}',${short.is_active})`)
        res.send(` Added Successful! `)
    }
    catch (error){
        res.status(401).send(error.message)
    }

};

exports.deleteDeviceType=async  (req, res)=> {
  const id =req.params.id
    try {
        await pgpgPool.query(`delete from devices_type where id=${id}`)
        res.send(" Delete   Successful!")
    }
    catch (error){
        res.status(401).send(error.message)
    }
}


