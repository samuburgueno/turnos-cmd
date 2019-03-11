import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './home/containers/home.js';
import Distrito from './distrito/containers/distrito.js';

class Rutas extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Route path="/" exact component={Home} />
                    <Route path="/distrito/:distrito" component={Distrito} />
                </div>
            </Router>
        );
    }
}

export default Rutas;
