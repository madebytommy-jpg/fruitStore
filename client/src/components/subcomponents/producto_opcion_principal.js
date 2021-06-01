import React from "react"
import "../../assets/style/nuestros_productos.scss"

function Producto_opcion_principal ({ src, name_button }) {
    return (
        <div className="producto_opcion_principal">
            <img src={ src } alt="imagen de fruta"/>
            <button>{ name_button }</button>
        </div>
    )
}

export default Producto_opcion_principal