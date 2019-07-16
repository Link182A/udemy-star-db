import React from 'react';
import ItemList from '../item-list';
import withData from '../hoc-helper/with-data';
import SwapiService from '../../services/swapi-service';

const swapi = new SwapiService();

const {
	getAllPeople,
	getAllPlanets,
	getAllStarships,
} = swapi;

const withChildFunction = (Wrap, fn) => {
	return (props) => {
		return (
			<Wrap {...props}>
				{fn}
			</Wrap>
		)
	}
}

const ListWithChildren = withChildFunction(
	ItemList,
	({ name }) => <span>{name}</span>
);

const PersonList = withData(ListWithChildren, getAllPeople);

const PlanetList = withData(ListWithChildren, getAllPlanets);

const StarshipList = withData(ListWithChildren, getAllStarships);

export {
	PersonList,
	PlanetList,
	StarshipList
}