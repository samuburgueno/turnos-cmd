import React, { Component } from 'react';

import Layout from '../components/layout.js';
import Header from '../components/header.js';
import Turnos from '../components/turnos.js';
import Turno from '../components/turno.js';

import Api from '../../utils/api.js';

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
		const resp = await api.getUltimosAtendidos(distrito);

		if (!resp.error) {
			this.setState({
				turnos: resp,
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

				{!this.state.turnos &&
					<div>
						<h5>Ups! <br/></h5>
						<h6>Parece que el distrito no está atendiendo en este momento.</h6>
					</div>
				} 
				
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
