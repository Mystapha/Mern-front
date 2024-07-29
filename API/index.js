const express=require("express");
const cors = require("cors");
const app=express();




const db_connect=require("./db-connect");
const { error } = require("console");
require("dotenv").config();
db_connect();
app.use(express.json());
app.use(cors());
app.use("/user",require("./routes/user"));
app.listen(process.env.PORT,(err)=>err?console.log(error):console.log("server is running"));
app.get("/",(req,res)=>res.send("Express on Vercel"));