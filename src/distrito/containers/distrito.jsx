import React, { Component } from 'react';

import Layout from '../components/layout';
import Header from '../components/header';
import Turnos from '../components/turnos';
import Turno from '../components/turno';
import Spinner from '../components/spinner';
import FiltroOficinas from '../../filtro-oficina/containers/filtro-oficinas'

import Api from '../../utils/api';

class Distrito extends Component {
	constructor(props) {
		super(props)

		this.state = {
			distrito: false,
			turnos: [],
			cargando: false,
			mostrarModal: false,
			reiniciarFiltro: false
		}

		this.handlerModal = this.handlerModal.bind(this)
		this.oficinasFiltradas = this.oficinasFiltradas.bind(this)
	}

	componentDidMount() {
		this.obtenerTurnos(this.props.match.params.distrito)
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.distrito !== this.props.match.params.distrito) {
			this.obtenerTurnos(this.props.match.params.distrito)
		}
	}

	async obtenerTurnos(distrito = this.state.distrito, oficinas = false) {
		this.setState({
			cargando: true
		});

		const api = new Api()
		var resp = false

		if (!oficinas) {
			resp = await api.getUltimosAtendidos(distrito);
		} else {
			resp = await api.getUltimosAtendidosByOficina(distrito, oficinas);
		}

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

	handlerModal(event) {
		if (this.state.reiniciarFiltro) {
			this.setState({
				reiniciarFiltro: false
			});
			this.obtenerTurnos()
		} else {
			this.setState({
				mostrarModal: !this.state.mostrarModal
			});
		}
	}

	oficinasFiltradas(oficinas) {
		this.obtenerTurnos(this.state.distrito, oficinas)

		this.setState({
			mostrarModal: !this.state.mostrarModal,
			reiniciarFiltro: true
		});
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
					handlerModal={this.handlerModal}
					reiniciarFiltro={this.state.reiniciarFiltro}
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

				{this.state.mostrarModal &&
					<FiltroOficinas 
						oficinasFiltradas={this.oficinasFiltradas}
						handlerModal={this.handlerModal}
						oficinas={this.state.turnos} />
				}
			</Layout>
		);
	}
}

export default Distrito;
