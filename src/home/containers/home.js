import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<Link to="/distrito/norte">
				<div className="container">
			  		<div className="card">
  						<div className="card-body">
						    <h5 className="card-title">Distrito Norte</h5>
						</div>
					</div>
				</div>
			</Link>
		);
	}
}

export default Home;
