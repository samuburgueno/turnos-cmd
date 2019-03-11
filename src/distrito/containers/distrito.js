import React, { Component } from 'react';

import Header from '../components/header.js';

class Distrito extends Component {
    constructor(props) {
        super(props)

        this.state = {
            distrito: false
        }
    }

    componentDidMount() {
        this.setState({
            distrito: this.props.match.params.distrito
        });
    }

    render() {
        return (
            <Header title={`Distrito ${this.state.distrito}`} description="Oficinas de atención al público" />
        );
    }
}

export default Distrito;
