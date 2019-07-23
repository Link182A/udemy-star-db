import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (Wraped, mapMethodsToProps) => {
	return (props) => {
		return (
			<SwapiServiceConsumer>
				{
					(swapiService) => {
						const serviceProps = mapMethodsToProps(swapiService);

						return (
							<Wraped {...props} {...serviceProps} />
						)
					}
				}
			</SwapiServiceConsumer>
		)
	}
}

export default withSwapiService;