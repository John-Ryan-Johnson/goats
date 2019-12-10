import React from 'react';

class GoatCorral extends React.Component {
  render() {
    const myGoats = this.props.goats;

    return (
      <div className="goatCoral">
         Goat Corral
      </div>
    );
  }
}

export default GoatCorral;
