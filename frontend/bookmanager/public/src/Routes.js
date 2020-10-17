import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CriarConta from './CriarConta/App'

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={CriarConta} />
            </Switch>
        </BrowserRouter>
    )
}