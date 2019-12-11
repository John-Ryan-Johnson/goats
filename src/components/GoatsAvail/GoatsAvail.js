import React from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';


class GoatsAvail extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
  }


getGoatCount = () => {
  const { goats } = this.props;
  return goats.filter((g) => !g.isBusy).length;
}

render() {
  return (
    <div className="card">
      <h4>{this.getGoatCount()} goats available</h4>
    </div>

  );
}
}
export default GoatsAvail;
