import React, { Component } from 'react';
import Header from '../header';
import Row from '../row';
import './app.css';
import { PersonList, StarshipList, PlanetList, StarshipDetails, PlanetDetails, PersonDetails } from '../sw-components';

class App extends Component {

  render() {

    return (
      <div>

        <Header />

        <StarshipDetails itemId={11}/>

        <PlanetDetails itemId={11}/>

        <PersonDetails itemId={11}/>


        <PersonList/>

        <StarshipList/>

        <PlanetList/>

      </div>
    );
  };
}


export default App;