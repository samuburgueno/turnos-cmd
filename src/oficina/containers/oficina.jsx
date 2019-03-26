import React, { Component } from 'react';

import Api from '../../utils/api.js';

class Oficina extends Component {
    constructor(props) {
        super(props);

        this.state = {
            oficina: false
        }
    }

    async componentDidMount() {
        const distrito = this.props.match.params.distrito;
        const oficina = this.props.match.params.oficina;

        const api = new Api();
        const resp = await api.getTurnosByOficina(distrito, oficina);

        const lugar = await api.getOficina(distrito, resp.result.records[0].Oficina)

        this.setState({
            oficina: lugar
        });

        // var fechas = []
        // resp.result.records.forEach((turno, key) => {
        //     if (!resp.result.records[key+1]) return;
        //     var date1 = moment(turno.FechaHora, "DD/MM/YYYY HH:mm:ss");
        //     var date2 = moment(resp.result.records[key+1].FechaHora, "DD/MM/YYYY HH:mm:ss");
        //     var diff = date1.diff(date2, 'minutes')
        //     fechas.push(diff)
        // })

        // let sum = fechas.reduce((previous, current) => current += previous);
        // let avg = sum / fechas.length;
        // console.log(fechas)
        // console.log(avg)
    }

    render() {
        return (
            <div>
                <div>Página de oficina</div>

                {this.state.oficina &&
                    <p>{this.state.oficina.properties.name}</p>
                }
            </div>
        );
    }
}

export default Oficina;
