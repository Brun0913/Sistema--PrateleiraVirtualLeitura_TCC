import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Home from './Pages/Home/Home'
import CriarConta from './Pages/CriarConta/App'
import termos from './Pages/CriarConta/index'
import menucliente from './Pages/menucliente/menucliente'
import menugerente from './Pages/menugerente/menugerente'
import menufuncionario from './Pages/menufuncionario/menufuncionario'
import gercadfunc from './Pages/menugerente/gercadfunc/gercadfunc'
import gergerenfunc from './Pages/menugerente/gergerenfunc/gergerenfunc'
import alterlivfunc from './Pages/menufuncionario/alterlivfunc/alterlivfunc'
import conlivfunc from './Pages/menufuncionario/conlivfunc/conlivfunc'
import GerenciarFinancas from'./Pages/menugerente/GerenciarFinancas/gerenfinancas.js'
import MeuPerfil from'./Pages/menucliente/MeuPerfil/Perfil'
import HistoricoCompras from'./Pages/menucliente/HistoricoCompras/HistCompras'
import FazerCompra from'./Pages/menucliente/FazerCompra/fazerCompra'


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
                <Route path="/gerenciarfinancas" component={GerenciarFinancas}/>
                <Route path="/Perfil" component={MeuPerfil}/>
                <Route path="/HistCompras" component={HistoricoCompras}/>
                <Route path="/fazerCompra" component={FazerCompra}/>
            </Switch>
        </BrowserRouter>
    )
}