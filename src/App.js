import React, { Component } from 'react';
import Map from './components/Map';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>PlayGrounds</h1>
        <div style={styles}>
          <Map />
        </div>
      </div>
    );
  }
}

const styles = {
  margin: '0 auto',
  width: '500px',
  height: '500px',
};

export default App;
