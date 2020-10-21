import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Home from './Pages/Home/Home'
import CriarConta from './Pages/CriarConta/App'
import termos from './Pages/CriarConta/index'
import menucliente from './Pages/menucliente/menucliente'
import menugerente from './Pages/menugerente/menugerente'
import menufuncionario from './Pages/menufuncionario/menufuncionario'


export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/criarconta" component={CriarConta} />
                <Route path="/termosEcondicoes" component={termos} />
                <Route path="/menucliente" component={menucliente} />
                <Route path="/menugerente" component={menugerente} />
                <Route path="/menufuncionario" component={menufuncionario} />
            </Switch>
        </BrowserRouter>
    )
}