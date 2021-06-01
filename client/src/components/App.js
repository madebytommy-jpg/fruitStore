import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Front from "./index"
import Nosotros from "./nosotros"
import Catalogo from "./catalogo"
import "../assets/style/principal.scss"


function App (){
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Front/>
                </Route>
                <Route path="/nosotros">
                    <Nosotros/>
                </Route>
                <Route path="/catalogo">
                    <Catalogo/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App