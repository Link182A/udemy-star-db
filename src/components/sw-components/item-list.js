import React from 'react';
import ItemList from '../item-list';
import withData from '../hoc-helper/with-data';
import withSwapiService from '../hoc-helper/with-swapi-service';

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

const mapPersonMethodsToProps = (swapiService)=>{
	return{
		getData: swapiService.getAllPeople,
	}
}

const mapPlanetMethodsToProps = (swapiService)=>{
	return{
		getData: swapiService.getAllPlanets,
	}
}

const mapStarshipMethodsToProps = (swapiService)=>{
	return{
		getData: swapiService.getAllStarships,
	}
}

const PersonList = withSwapiService(withData(ListWithChildren), mapPersonMethodsToProps);

const PlanetList = withSwapiService(withData(ListWithChildren), mapPlanetMethodsToProps);

const StarshipList = withSwapiService(withData(ListWithChildren), mapStarshipMethodsToProps);

export {
	PersonList,
	PlanetList,
	StarshipList
}