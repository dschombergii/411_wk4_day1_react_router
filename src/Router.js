import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'

export default function Router() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/car/:id" component={Car} />
        </Switch>
    );
}

