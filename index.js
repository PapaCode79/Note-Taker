const express = require('express')
const fs = require("fs")
const db = require("./db/db.json")
const path = require("path")



const app = express();
const PORT = process.env.PORT ||3000
app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"./public/index.html"))
})
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname,"./public/notes.html"))
})


app.listen(PORT, function () {
    console.log("appislistening")
})