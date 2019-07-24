import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import {
	PeoplePage,
	PlanetPage,
	StarshipPage
} from '../pages';

import SwapiService from '../../services/swapi-service';

import { SwapiServiceProvider } from '../swapi-service-context';

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

	onServiceChange = () => {
		console.log('asugd');

	}

	render() {

		return (
			<div>
				<SwapiServiceProvider value={new SwapiService()}>
					<Router>

						<Header onHeaderChange={this.onServiceChange} />

						<RandomPlanet />

						<Route path='/people' component={PeoplePage}/>
						<Route path='/planet' component={PlanetPage}/>
						<Route path='/starship' component={StarshipPage}/>

					</Router>
				</SwapiServiceProvider>

			</div>
		);
	};
}


export default App;