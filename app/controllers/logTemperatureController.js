const pool = require("./../adapters/database/postgreSql");

exports.getTempList = async (req, res) => {
    try {
      const list = await pool.query("SELECT * FROM log_temperature");

      const tempList = list.rows;
  
      res.status(200).json(tempList);
    } catch (error) {
      res.status(401).send(error);
    }
  };
exports.addTemp=async (req, res) =>{
  const date=Date.now()
  const short =req.body
  console.log(date)
    try {
      await pool.query(`insert into log_temperature(vehicle_id,device_id,read_data,created_at) 
      values(${short.vehicle_id}, ${short.device_id}, '${short.read_data}',to_timestamp(${date}))`)
        res.send(` Added Successfully! `)
    }
    catch (error){
        res.status(401).send(error.message)
    }

};