import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Registrar from './pages/Registrar';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/registrar" exact component={Registrar} />
            </Switch>
        </BrowserRouter>
    );
}