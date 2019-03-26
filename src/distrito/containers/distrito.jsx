import React, { Component } from 'react';

import Layout from '../components/layout';
import Header from '../components/header';
import Turnos from '../components/turnos';
import Turno from '../components/turno';
import Spinner from '../components/spinner';

import Api from '../../utils/api';

class Distrito extends Component {
	constructor(props) {
		super(props)

		this.state = {
			distrito: false,
			turnos: [],
			cargando: false
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
		this.setState({
			cargando: true
		});

		const api = new Api()
		const resp = await api.getUltimosAtendidos(distrito);

		// Ordenamiento alfabetico por Nombres de Oficinas
		if (!resp.error) {
			resp.sort((a, b) => {
				return a.Oficina < b.Oficina ? -1 : 1
			})

			this.setState({
				turnos: resp,
				distrito: distrito,
				cargando: false
			});
		} else {
			this.setState({
				error: resp.message,
				turnos: false,
				distrito: distrito,
				cargando: false
			});
		}

	}

	render() {
		if (this.state.cargando) {
			return(
				<Layout>
					<Spinner />
				</Layout>
			)
		}

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
								<Turno
									key={turno.Ticket + turno.FechaHora}
									distrito={this.state.distrito}
									{...turno} />
							)
						})}
					</Turnos>
				}
			</Layout>
		);
	}
}

export default Distrito;
