import React, { Component } from 'react';

import Api from '../../utils/api.js';

class Oficina extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        const distrito = this.props.match.params.distrito
        const oficina = this.props.match.params.oficina

        const api = new Api();
        const resp = await api.getTurnosByOficina(distrito, oficina);

        resp.result.records.reduce((a, b) => {
            console.log(a, b)
        })
    }

    render() {
        return (
            <div>Página de oficina</div>
        );
    }
}

export default Oficina;
