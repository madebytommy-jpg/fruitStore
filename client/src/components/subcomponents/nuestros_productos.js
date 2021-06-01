import React from "react"
import { Link } from "react-router-dom"
import ProductoOpcionPrincipal from "./producto_opcion_principal.js"
import fruta from "../../assets/static/frutas/kiwi.jpeg"
import verdura from "../../assets/static/verduras/col.jpeg"
import "../../assets/style/nuestros_productos.scss"


function Nuestros_productos (){
    return(
        <div className="nuestros_productos">
            <h2>NUESTROS PRODUCTOS</h2>
            <div className="contenedor_productos_principales">
                <Link to="/catalogo/frutas">
                    <ProductoOpcionPrincipal src={fruta} name_button="FRUTAS"/>
                </Link>
                <Link to="/catalogo/verduras">
                    <ProductoOpcionPrincipal src={verdura} name_button="VERDURAS"/>
                </Link>
            </div>
        </div>
    )
}

export default Nuestros_productos