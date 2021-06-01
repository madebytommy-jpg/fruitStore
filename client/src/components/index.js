import React from "react"
import Slider from "./subcomponents/slider.js"
import Productos from "./subcomponents/nuestros_productos.js"
import Informacion from "./subcomponents/informacion.js"
import "../assets/style/principal.scss"

const Front = () => {
return(
    <div className="container">
        <Slider/>
        <Productos/>
        <Informacion/>
    </div>
)}


export default Front