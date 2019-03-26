import React, { Component } from 'react';

class FiltroOficinas extends Component {
	constructor(props) {
		super(props)

		this.state = {
			oficinas: this.props.oficinas,
			oficinasFiltradas: []
		}

		this.handlerCancelar = this.handlerCancelar.bind(this)
		this.handlerSubmit = this.handlerSubmit.bind(this)
		this.handlerChange = this.handlerChange.bind(this)
	}

	handlerSubmit(event) {
		event.preventDefault()
		if (this.state.oficinasFiltradas.length) {
			this.props.oficinasFiltradas(this.state.oficinasFiltradas)
		}
		
		this.props.handlerModal()
	}

	handlerChange(event) {
		const codigoOficina = event.target.value
		var oficinas = this.state.oficinasFiltradas

		if (!this.state.oficinasFiltradas.includes(codigoOficina)) {
			oficinas.push(codigoOficina)
		} else {
			oficinas.splice(this.state.oficinasFiltradas.indexOf(codigoOficina), 1)
		}

		this.setState({
			oficinasFiltradas: oficinas
		});
	}

	handlerCancelar(event) {
		this.props.handlerModal()
	}

	render() {
		return (
			<div className="filtro-oficinas">
				<form onSubmit={this.handlerSubmit}>
					<div className="modal fade show" style={{display: "block"}}>
					  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
						<div className="modal-content">
						  <div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Filtrar Oficinas</h5><br/>
							<button onClick={this.handlerCancelar} type="button" className="close" data-dismiss="modal" aria-label="Close">
							  <span aria-hidden="true">&times;</span>
							</button>
						  </div>
						  <div className="modal-body">
							<small>Marca todas las oficinas que quieres visualizar. Déjalas sin tildar para verlas a todas.</small>
							<br/>
							{this.state.oficinas && 
									<ul className="list-group">
										{this.state.oficinas.map((oficina, key) => {
											return(
												<li 
													key={key}
													className="list-group-item d-flex justify-content-between align-items-center">
													{oficina.Oficina}
													<input 
														onChange={this.handlerChange} 
														type="checkbox" 
														name="oficina" 
														value={oficina.CodigoOficina} />
												</li>
											)
										})}
									</ul>
							}
						  </div>
						  <div className="modal-footer">
							<button onClick={this.handlerCancelar} type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Cancelar</button>
							<button type="submit" className="btn btn-sm btn-primary">Filtrar</button>
						  </div>
						</div>
					  </div>
					</div>
					<div className="modal-backdrop fade show"></div>
				</form>
			</div>
		);
	}
}

export default FiltroOficinas;