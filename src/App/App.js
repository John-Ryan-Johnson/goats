import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import goatData from '../helpers/data/goatData';
import GoatCorral from '../components/GoatCorral/GoatCorral';

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

  render() {
    return (
      <div className="App">
         <button className="btn btn-primary">Help Me</button>
         <GoatCorral goats={this.state.goats} freeGoat={this.freeGoat}/>
      </div>
    );
  }
}

export default App;
