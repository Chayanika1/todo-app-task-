const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const port = 3000;
app.set("view engine","ejs");
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.get("/",(req,res)=>{
  res.render("index")
})
app.listen(port,()=>{
  console.log("server is running"+port);
})