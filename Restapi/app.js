const express=require("express")
const app= express()
const coursesRouter=require("./routes/courses")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
//const { parse } = require("dotenv")

const url='mongodb://0.0.0.0:27017/test'


app.use(bodyParser.json())
app.use("/c/courses",coursesRouter)

// app.get("/",(req,res)=>{
//     res.send("your url is working fine.")
// })

mongoose.connect(url,()=>{
    //useMongoClient:true,
    console.log("connected to db")
    
})



app.listen(2000,()=>{
    console.log("server is running on 2000");
})
















//console.log("This is Rohit Shamkure")