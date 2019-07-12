import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBaundary from '../error-baundary';

export default class PeoplePage extends Component {

	swapi = new SwapiService();

	state = {
		selectedPerson: 3,
	}


	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		})
	}

	render() {
		if (this.state.hasError) {
			return (
				<ErrorIndicator />
			)
		}

		const itemList = (
			<ItemList
				onItemSelected={this.onPersonSelected}
				getData={this.swapi.getAllPeople}
			>
				{({ name, gender }) => `${name}, ${gender}`}
			</ItemList>
		)

		const personDetails = (
			<PersonDetails personId={this.state.selectedPerson} />
		)

		return (
			<ErrorBaundary>
				<Row
					left={itemList}
					right={personDetails}
				/>
			</ErrorBaundary>
		)
	}
}