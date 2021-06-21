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


app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM frutasyverdurasdb"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.post("/api/insert", (req, res) => {

    const nombre_producto = req.body.nombre_producto
    const total_card = req.body.total_card
    const precio = req.body.precio
    const cantidad = req.body.cantidad

    const sqlInsert = "INSERT INTO frutasyverdurasdb (nombre_producto, precio, total_card, cantidad) VALUES (?,?,?,?)"
    db.query(sqlInsert, [nombre_producto, precio, total_card, cantidad], (err, result) => {
        console.log(result)
    })
})

app.listen(3001, () => {
    console.log("running on port 3001")
})