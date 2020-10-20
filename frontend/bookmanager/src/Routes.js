import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CriarConta from './pages/CriarConta/App'
import termos from './pages/CriarConta/index'
import menucliente from './pages/menucliente/menucliente'
import menugerente from './pages/menugerente/menugerente'
import menufuncionario from './pages/menufuncionario/menufuncionario'

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/criarconta" component={CriarConta} />
                <Route path="/termosEcondicoes" component={termos} />
                <Route path="/menucliente" component={menucliente} />
                <Route path="/menugerente" component={menugerente} />
                <Route path="/menufuncionario" component={menufuncionario} />
            </Switch>
        </BrowserRouter>
    )
}