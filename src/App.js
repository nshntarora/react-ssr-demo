import React from 'react';

import Header from "./components/Header";
import Banner from "./components/Banner";
import CardsGrid from "./components/CardsGrid";
import FeatureBlockGrid from "./components/FeatureBlockGrid";

import './assets/css/skel.css';
import './assets/css/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper style1">
          <Header></Header>
          <Banner></Banner>
          <CardsGrid></CardsGrid>
          <FeatureBlockGrid></FeatureBlockGrid>
        </div>
      </div>
    );
  }
}

export default App;
