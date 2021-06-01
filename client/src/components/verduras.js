import React from "react"
import Card from "./subcomponents/cards.js"
import "../assets/style/producto.scss"



class Verduras extends React.Component{
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
        const verduras = this.state.catalogo.filter( frutas => frutas.tipo_de_producto === "verdura")
        let searchTerm = localStorage.getItem("searchTerm")
        return (   
            <div className="container_productos">
                <h2>Verduras</h2>
                <div className="container_producto_items">
                    {verduras.filter((val) => {
                        if (searchTerm === ""){
                            return val
                        } else if (val.nombre.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                    }).map((verdura) => <Card src={verdura.src} nombre_producto={verdura.nombre} metodo_de_compra={verdura.metodo_de_compra} precio={verdura.precio} key={verdura.key}/>)}
                </div>
            </div>
        )
    }
}

export default Verduras