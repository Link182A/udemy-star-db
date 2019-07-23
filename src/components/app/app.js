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

class App extends Component {

	onServiceChange = () => {
		console.log('asugd');

	}

	render() {

		return (
			<div>
				<SwapiServiceProvider value={new SwapiService()}>

					<Header onHeaderChange={this.onServiceChange} />

					<RandomPlanet />

					<PeoplePage />
					<PlanetPage />
					<StarshipPage />

				</SwapiServiceProvider>

			</div>
		);
	};
}


export default App;