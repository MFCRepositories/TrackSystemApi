const pgPool = require("./../adapters/database/postgreSql");

exports.getLocationList = async (req, res) => {
    try {
      const list = await pgPool.query("SELECT * FROM log_location");

      const locationList = list.rows;
  
      res.status(200).json(locationList);
    } catch (error) {
      res.status(401).send(error);
    }
  };
exports.addLocation=async (req, res) =>{
 
    try {
    
      await pgPool.query(`INSERT INTO log_location (vehicle_id,device_id,latitude, longitude,created_at) VALUES (${short.vehicle_id},${short.device_id},${short.latitude},${short.longitude},to_timestamp(${Date.now()}))`)
        res.send(`Successfully! `)
    }
    catch (error){
        res.status(401).send(error.message)
    }

};