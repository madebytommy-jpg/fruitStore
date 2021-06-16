import React from "react"
import { useState } from "react"
import { Switch, Route, Link } from "react-router-dom"
import "../assets/style/catalogo.scss"
import Frutas from "../components/frutas"
import Verduras from "../components/verduras"
import "../assets/style/producto.scss"

function Catalogo (){
    const [searchTerm, setSearchTerm] = useState("")
    localStorage.setItem("searchTerm", searchTerm)
    
    return(
        <div className="container_all">
            <div className="contenedor_menu_catalogo">
            <nav className="menu">
                <Link to="/">
                    Inicio
                </Link>
                <Link to="/Nosotros">
                    Quienes Somos
                </Link>
                <Link to="/catalogo/frutas">
                    Frutas
                </Link>
                <Link to="/catalogo/verduras">
                    Verduras
                </Link>
                <div className="numero_contacto">
                    <i className="fas fa-phone-volume"></i>
                    <p>
                        <strong>Contacto:</strong>  0993294856
                    </p>
                </div>
            </nav>
            <div className="contenedor_carrito_de_compra">
                <div className="buscador">
                    <input type="text" placeholder="search..." onChange={event => {setSearchTerm(event.target.value)}}/>
                </div>
                <div className="carrito_de_compra">
                    <i className="fas fa-shopping-cart"></i>
                    <p>$ 0</p>
                </div>
                <Link to="">
                    Comprar
                </Link>
            </div>
        </div>
            <Switch>
                <Route path="/catalogo/frutas">
                    <Frutas/>
                </Route>
                <Route path="/catalogo/verduras">
                    <Verduras/>
                </Route>
            </Switch>
        
        </div>
    )
}

export default Catalogo