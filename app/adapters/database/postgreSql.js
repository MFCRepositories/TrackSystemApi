const {Client}=require('pg')

const client=new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"mfc",
    database:"trackingApiDB"
})

client.connect();

module.exports=client




