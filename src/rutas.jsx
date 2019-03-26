import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from './home/components/layout';

import Home from './home/containers/home';
import Distrito from './distrito/containers/distrito';
import Oficina from './oficina/containers/oficina';

class Rutas extends Component {
    render() {
        return (
            <Router basename={process.env.NODE_ENV === 'development' ? "" : "/turnos-cmd"}>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/distrito/:distrito" component={Distrito} />
                        <Route exact path="/distrito/:distrito/:oficina" component={Oficina} />
                        <Route component={() => {
                            return(
                                <div>
                                    <h4>Pagina no entontrada</h4>
                                </div>
                            )
                        }} />
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

export default Rutas;
