const express = require("express")

const app = express()

app.use(express.static("public"))

let lastData = {}

app.post("/api/data/", (req, res) => {
    lastData = req.body
    console.log(lastData)
    res.sendStatus(200)
})

app.get("/api/data/", (req, res) => {
    res.json(lastData)
})

app.listen(5000)
