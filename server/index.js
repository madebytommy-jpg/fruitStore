const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const mysql = require("mysql")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "frutasyverdurasdb",
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post("/api/insert", (req, res) => {

    const nombre = req.body.nombre
    const total_compra = req.body.total_compra

    const sqlInsert = "INSERT INTO frutasyverduras (nombre, total_compra) VALUES (?,?)"
    db.query(sqlInsert, [nombre, total_compra], (err, result) => {
        console.log(result)
    })
})

app.listen(3001, () => {
    console.log("running on port 3001")
})