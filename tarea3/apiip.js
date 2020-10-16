const obtenerOrigenIP = require("./library");

obtenerOrigenIP("190.192.190.146",(res)=>{
    console.log("la ip actual es:",res.ip,
    res.country,", ",res.region,",",res.city);
});