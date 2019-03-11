import React, { Component } from 'react';
import Api from '../../utils/api.js'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            distritos: false
        }
    }

    async componentDidMount() {
        const api = new Api()
        const dataset = await api.getDataset('94e6595d-9dd9-4b07-9120-301bb15a3402');
        this.setState({
            distritos: dataset.result[0].resources
        });
        console.log(dataset)
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
              <span className="navbar-brand mb-0 h1">Turnos CMD</span>
            </nav>
        );
    }
}

export default Home;
