import React, { useState } from "react"
import "../../assets/style/producto.scss"
import Axios from "axios"


function Card({ src, nombre_producto, metodo_de_compra, precio }){
    const [contador, setContador] = useState(0)
    const [totalCard, setTotalCard] = useState(0)

    const incrementar = () => {
        setContador( contador + 1)
        setTotalCard( (contador + 1) * precio )
    }

    const disminuir = () => {
        if( contador === 0){
            setContador( contador )
        } else {
            setContador( contador - 1)
        }
        if( totalCard === 0){
            setTotalCard( totalCard)
        } else {
            setTotalCard( (contador - 1) * precio)
        }
    }

    const enviarPedido = () => {
        Axios.post("http://localhost:3001/api/insert", {
            nombre: nombre_producto, 
            total_compra: totalCard
        }).then(()=>{
            alert("successful insert")
        })
    }

    return  (
        <div className="card">
            <div className="container_img_card">
                <img src={src} alt="slide-img"></img>
            </div>
            <div className="descripcion_card">
                <h4>{nombre_producto}</h4>
                <div className="informacion_precio_producto">
                    <p>{metodo_de_compra}</p>
                    <p>${precio}</p>
                </div>
                <div className="informacion_cantidad">
                    <p>Cantidad: </p>
                    <div className="informacion_botones">
                        <button onClick={disminuir}>-</button><span>{contador}</span><button onClick={incrementar}>+</button>
                    </div>
                </div>
                <div className="totalCard"><p> total: $ {totalCard}</p></div>
                <div className="button">
                    <button onClick={enviarPedido}>Añadir al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Card