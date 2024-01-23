const mongoose=require("mongoose");
require("dotenv").config();
const connection=mongoose.connect("mongodb+srv://bgforanyuse:Bharat2112@cluster0.owb6ekt.mongodb.net/")

module.exports={
    connection
}