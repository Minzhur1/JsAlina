const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get("*.css", (req, res)=>{
    res.sendFile(__dirname + "/style.css")
})

app.get("/gameover.mp3", (req, res)=>{
    res.sendFile(__dirname + "/gameover.mp3")
})

app.get("/success.mp3", (req, res)=>{
    res.sendFile(__dirname + "/success.mp3")
})

app.get("/eat.mp3", (req, res)=>{
    res.sendFile(__dirname + "/eat.mp3")
})

// const bodyParser = require("body-parser")
// const urlencodedparser = express.json()
// const urlencodedparser = bodyParser.urlencoded({extended:false}) //для обычной формы
// app.post("/", urlencodedparser, (req, res)=>{

// })

app.listen("2500", ()=>{
    console.log("Server is running")
})