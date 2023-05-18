import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="planet-card">
        <div className="planet-img">
          <img
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
            className={ (planetName).toLowerCase() }
          />
        </div>
        <div className="planet-name">
          <p data-testid="planet-name">{planetName}</p>
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
