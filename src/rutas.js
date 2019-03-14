import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from './home/components/layout.js';

import Home from './home/containers/home.js';
import Distrito from './distrito/containers/distrito.js';

class Rutas extends Component {
    render() {
        return (
            <Router basename={process.env.NODE_ENV === 'development' ? "" : "/turnos-cmd"}>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/distrito/:distrito" component={Distrito} />
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

export default Rutas;
