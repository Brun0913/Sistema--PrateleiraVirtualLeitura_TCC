import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Home from './pages/Home/Home'
import CriarConta from './pages/CriarConta/App'
import termos from './pages/CriarConta/index'
import menucliente from './pages/menucliente/menucliente'
import menugerente from './pages/menugerente/menugerente'
import menufuncionario from './pages/menufuncionario/menufuncionario'
import gercadfunc from './pages/gercadfunc/gercadfunc'
import gergerenfunc from './pages/gergerenfunc/gergerenfunc'
import alterlivfunc from './pages/alterlivfunc/alterlivfunc'
import conlivfunc from './pages/conlivfunc/conlivfunc'


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
                <Route path="/gercadfunc" component={gercadfunc} />
                <Route path="/gergerenfunc" component={gergerenfunc} />
                <Route path="/alterlivfunc" component={alterlivfunc} />
                <Route path="/conlivfunc" component={conlivfunc} />
            </Switch>
        </BrowserRouter>
    )
}