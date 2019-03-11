import React, { Component } from 'react';
import Api from './utils/api.js'

class App extends Component {
	async componentDidMount() {
		const api = new Api()
		const dataset = await api.getDataset('94e6595d-9dd9-4b07-9120-301bb15a3402');
		console.log(dataset)

		const resource = await api.getResource('a5d53703-00fd-4f4d-bc4f-7b08d6c71879');
		console.log(resource)
	}

	render() {
		return (
			<nav className="navbar navbar-dark bg-dark">
			  <span className="navbar-brand mb-0 h1">Turnos CMD</span>
			</nav>
		);
	}
}

export default App;
