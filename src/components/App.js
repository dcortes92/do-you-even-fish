import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    // initial state
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish) {
    const fishes = {...this.state.fishes};
    const ts = Date.now();
    fishes[`fishes-${ts}`] = fish;
    this.setState( { fishes })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;
