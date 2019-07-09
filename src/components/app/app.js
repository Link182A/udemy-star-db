import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../peoplePage';

import './app.css';

class App extends Component{

  state={
    // selectedPerson: 5
  }

  
render(){
  return (
    <div>
      <Header />
      <RandomPlanet />
      <PeoplePage/>
      <PeoplePage/>
      <PeoplePage/>
    </div>
  );
};
}
  

export default App;