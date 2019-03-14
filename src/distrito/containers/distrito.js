import React, { Component } from 'react';

import Layout from '../components/layout.js';
import Header from '../components/header.js';
import Turnos from '../components/turnos.js';
import Turno from '../components/turno.js';

import Api from '../../utils/api.js';

const ATENDIDOS = {
    norte: '9867ebdb-b372-4c7e-8fe1-eb1c74173483',
    centro: '9867ebdb-b372-4c7e-8fe1-eb1c74173483'
}

class Distrito extends Component {
    constructor(props) {
        super(props)

        this.state = {
            distrito: false,
            turnos: []
        }
    }

    componentDidMount() {
        this.obtenerTurnos(this.props.match.params.distrito)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.distrito !== this.state.distrito) {
            this.obtenerTurnos(nextProps.match.params.distrito)
        }
    }

    async obtenerTurnos(distrito) {
        const api = new Api()
        const resp = await api.getResource(ATENDIDOS[distrito]);

        if (!resp.error) {
            this.setState({
                turnos: resp.result.records,
                distrito: distrito
            });
        } else {
            this.setState({
                error: resp.message,
                turnos: false,
                distrito: distrito
            });
        }

    }

    render() {
        return (
            <Layout>
                <Header
                    title={`Distrito ${this.state.distrito}`}
                    description="Oficinas de atención al público">
                </Header>
                
                {this.state.turnos &&
                    <Turnos>
                        {this.state.turnos.map((turno) => {
                            return(
                                <Turno key={turno.Ticket + turno.FechaHora} {...turno} />
                            )
                        })}
                    </Turnos>
                }
            </Layout>
        );
    }
}

export default Distrito;
