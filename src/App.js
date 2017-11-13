import React from 'react';

import Header from "./components/Header";
import Banner from "./components/Banner";

import './assets/css/skel.css';
import './assets/css/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper style1">
          <Header></Header>
          <Banner></Banner>
        </div>
      </div>
    );
  }
}

export default App;
