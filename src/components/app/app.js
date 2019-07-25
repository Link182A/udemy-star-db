import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import {
	PeoplePage,
	PlanetPage,
	StarshipPage,
	LoginPage,
	SecretPage
} from '../pages';

import SwapiService from '../../services/swapi-service';

import { SwapiServiceProvider } from '../swapi-service-context';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { StarshipDetails } from '../sw-components';

class App extends Component {

	state = {
		isLoggedIn: false
	}

	onLogin = () => {
		this.setState({
			isLoggedIn: true
		})
	}

	onServiceChange = () => {
		console.log('asugd');

	}

	render() {

		const { isLoggedIn } = this.state;

		return (
			<div>
				<SwapiServiceProvider value={new SwapiService()}>
					<Router>

						<Header onHeaderChange={this.onServiceChange} />

						<RandomPlanet />

						<Switch>
							<Route path='/' render={() => <h2>Hello world</h2>} exact />

							<Route path='/people/:id?' component={PeoplePage} />
							<Route path='/planet' component={PlanetPage} />
							<Route path='/starship' component={StarshipPage} exact />

							<Route path='/secret' render={() => (
								<SecretPage isLoggedIn={isLoggedIn} />
							)} />

							<Route path='/login' render={() => (
								<LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
							)} />

							<Route path='/starship/:id' render={({ match, location, history }) => {
								const { id } = match.params;
								return (
									<StarshipDetails itemId={id} />
								)
							}
							}
							/>

							<Redirect to='/'/>

						</Switch>


					</Router>
				</SwapiServiceProvider>

			</div>
		);
	};
}


export default App;