import React, { Component } from 'react';

import Layout from '../components/distrito.js';
import Header from '../components/header.js';
import Turnos from '../components/turnos.js';
import Turno from '../components/turno.js';

import Api from '../../utils/api.js';

const ATENDIDOS = {
    norte: '9867ebdb-b372-4c7e-8fe1-eb1c74173483',
}

// const EMITIDOS = {
//     norte: 'a5d53703-00fd-4f4d-bc4f-7b08d6c71879',
// }

class Distrito extends Component {
    constructor(props) {
        super(props)

        this.state = {
            distrito: false,
            turnos: []
        }
    }

    async componentDidMount() {
        const api = new Api()
        const atendidos = await api.getResource(ATENDIDOS[this.props.match.params.distrito]);

        this.setState({
            turnos: atendidos.result.records,
            distrito: this.props.match.params.distrito
        });
    }

    render() {
        return (
            <Layout>
                <Header 
                    title={`Distrito ${this.state.distrito}`} 
                    description="Oficinas de atención al público">
                </Header>
                <Turnos>
                    {this.state.turnos.map((turno) => {
                        return(
                            <Turno key={turno.Ticket} {...turno} />
                        )
                    })}
                </Turnos>
            </Layout>
        );
    }
}

export default Distrito;
