import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
// import ItemList from '../item-list';
// import ItemDetails from '../person-details';

import './app.css';
import PeoplePage from '../pages';

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <PeoplePage/>

      {/* <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <ItemDetails />
        </div>
      </div> */}
    </div>
  );
};

export default App;