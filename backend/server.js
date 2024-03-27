import express  from "express";
import dotenv  from "dotenv";

dotenv.config()
const Port=process.env.PORT || 3000

const app=express()

// app.get("/",(req,res)=>{
//     res.send(`Server is ready in port${Port}`)
// })

app.get("/api/jokes",(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"First joke",
            content:"I told my wife she was drawing her eyebrows too high. She looked surprised."
        },
        {
            id:2,
            title:"Second joke",
            content:"Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id:3,
            title:"Third joke",
            content:"I'm reading a book on anti-gravity. It's impossible to put down!"
        },
        {
            id:4,
            title:"Forth joke",
            content:"I'm on a whiskey diet. I've lost three days already."
        },
        
        {
            id:5,
            title:"Fifth joke",
            content:"Parallel lines have so much in common. It's a shame they'll never meet."
        }
        
    ]

    res.send(jokes)
})

app.listen(Port,()=>{
    console.log(`server running on ${Port}`)
})