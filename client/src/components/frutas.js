import React from "react"
import Card from "./subcomponents/cards.js"
import "../assets/style/producto.scss"



class Frutas extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            catalogo: [],
            isFetch: true,
        }
    }
    componentDidMount (){
        fetch("https://sheetdb.io/api/v1/lkcv6h24qpzi4")
            .then(response => response.json())
            .then(catalogoJson => this.setState({ catalogo: catalogoJson, isFetch: false}))
    }
    render(){
        if ( this.state.isFetch){
            return "loading..."
        }
        const frutas = this.state.catalogo.filter( frutas => frutas.tipo_de_producto === "fruta")
        let searchTerm = localStorage.getItem("searchTerm")
        return (   
            <div className="container_productos">
            <h2>FRUTAS</h2>
                <div className="container_producto_items">
                    {frutas.filter((val) => {
                        if (searchTerm === ""){
                            return val
                        } else if (val.nombre.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                    }).map((fruta) => <Card src={fruta.src} nombre_producto={fruta.nombre} metodo_de_compra={fruta.metodo_de_compra} precio={fruta.precio} key={fruta.key}/>)}
                </div>
            </div>
        )
    }
}

export default Frutas