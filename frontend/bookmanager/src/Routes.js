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
import GerenciarFinancas from'./Pages/menugerente/GerenciarFinancas/gerenfinancas'
import MeuPerfil from'./Pages/menucliente/MeuPerfil/Perfil'
import HistoricoCompras from'./Pages/menucliente/HistoricoCompras/HistCompras'
import FazerCompra from './Pages/menucliente/FazerCompra/fazerCompra'
import Compra from'./Pages/menucliente/Compra/compra'
import FinalizarCompra from'./Pages/menucliente/FinalizarCompra/finalizar'
import ExcluirLivro from './Pages/menufuncionario/TelaExcluirLivro'
import InserirLivro from './Pages/menufuncionario/TelaInserirLivro/livros'
import excluirfunc from './Pages/menugerente/excluirfunc/excluirfunc'

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
                <Route path="/FazerCompra" component={FazerCompra} />
                <Route path="/Compra" component={Compra}/>
                <Route path="/finalizar" component={FinalizarCompra}/>
                <Route path="/excluirlivro" component={ExcluirLivro}/>
                <Route path="/inserirlivro" component={InserirLivro}/>
                <Route path="/excluirfunc" component={excluirfunc}/>
            </Switch>
        </BrowserRouter>
    )
}