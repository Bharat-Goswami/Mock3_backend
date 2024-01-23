const express=require("express");
const cors=require("cors");
const { userController } = require("./controller/user.controller");
const { authentication } = require("./auth_middleware/authentication");
const { connection } = require("./db");

const app=express();
app.use(cors());
require("dotenv").config();
app.use(express.json());
app.use("/user",userController);
 app.use(authentication)
// app.use("/appointments",)


app.get("/",(req,res)=>{
    res.send("homepage for Masai Hospital");
});

app.listen( 8000, async () => {
    try {
      await connection;
      console.log("Connected to DataBase(MongoDB)");
    } catch (err) {
      console.log(err);
      console.log("error while connecting to DataBase(MongoDB)");
    }
    console.log(`App is running on port 8000`);
  });
  
  