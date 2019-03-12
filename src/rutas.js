import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from './home/components/layout.js';

import Home from './home/containers/home.js';
import Distrito from './distrito/containers/distrito.js';

class Rutas extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Route path="/" exact component={Home} />
                    <Route path="/distrito/:distrito" component={Distrito} />
                </Layout>
            </Router>
        );
    }
}

export default Rutas;
