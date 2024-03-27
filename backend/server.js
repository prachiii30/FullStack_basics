import express  from "express";
import dotenv  from "dotenv";

dotenv.config()
const Port=process.env.PORT || 3000

const app=express()

app.get("/",(req,res)=>{
    res.send("Server is ready")
})

app.listen(Port,()=>{
    console.log(`server running on ${Port}`)
})