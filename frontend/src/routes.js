import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Registrar from './pages/Registrar';
import Perfil from './pages/Perfil';
import Livro from './pages/Livro';
import Home from './pages/Home';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/registrar" exact component={Registrar} />
                <Route path="/perfil" exact component={Perfil} />
                <Route path="/livro" exact component={Livro} />
                <Route path="/home" exact component={Home} />
            </Switch>
        </BrowserRouter>
    );
}