import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import goatData from '../helpers/data/goatData';
import GoatCorral from '../components/GoatCorral/GoatCorral';
import GoatsAvail from '../components/GoatsAvail/GoatsAvail';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  freeGoat = (goatId) => {
    goatData.freeAGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  };

  useGoat = (goatId) => {
    goatData.useAGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  };

  render() {
    return (
      <div className="App">
        <GoatsAvail goats={this.state.goats}/>
        <GoatCorral goats={this.state.goats} freeGoat={this.freeGoat} useGoat={this.useGoat}/>
      </div>
    );
  }
}

export default App;
