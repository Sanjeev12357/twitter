const express= require("express");
const connect = require("./config/db");

const app= express();


app.listen(3000,async ()=>{
     console.log("server is runnign ");
    await connect();
   
})