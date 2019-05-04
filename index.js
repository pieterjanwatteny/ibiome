const express = require("express")

const app = express()

app.use(express.static("public"))
//app.use(express.json())
let lastData = {}

app.post("/api/data/", express.json(), (req, res) => {
    lastData = req.body
    console.log(lastData)
    res.sendStatus(200)
})

app.get("/api/data/", (req, res) => {
    res.json(lastData)
})

app.listen(process.env.PORT || 5000)
