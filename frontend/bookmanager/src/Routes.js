import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CriarConta from './Pages/CriarConta/App'
import termos from './Pages/CriarConta/index'

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/criarconta" component={CriarConta} />
                <Route path="/termosEcondicoes" component={termos} />
            </Switch>
        </BrowserRouter>
    )
}