import React from "react"
import "../../assets/style/informacion.scss"

function Informacion () {
return(
    <div className="informacion">
        <h2>INFORMACIÓN</h2>
        <hr/>
        <div className="container_informacion">
            <div className="informacion_contacto">
                <div className="texto_informativo">
                    <h3>UBICACIÓN</h3>
                    <p>Urbanización jardines del salado</p>
                </div>
                <div className="texto_informativo">
                    <h3>TELÉFONOS</h3>
                    <p>0993294856</p>
                </div>
            </div>
            <div className="horarios_atencion">
                <h3>HORARIOS DE ATENCIÓN</h3>
                <p>Lunes a Domingo: 24 / 7</p>
                
            </div>
        </div>
    </div>
)}

export default Informacion