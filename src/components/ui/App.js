import React from 'react';
import Menu from './Menu';
import Appbar from '../common/Appbar';
import Cartview from './Cartview';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

function App() {
    return (
        <Router>
            <Appbar />
            <Switch>
                <Route path="/" exact component = {Menu} />
                <Route path="/cart" exact component = {Cartview} />
            </Switch>
        </Router>
    )
}

export default App
