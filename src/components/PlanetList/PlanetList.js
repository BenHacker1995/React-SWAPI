import React, { Component } from 'react';
import Planet from '../Planet/Planet';

class PlanetList extends Component {

    render() {
        return (
        <div>
            <h2>All Planets in Star Wars Universe</h2>
            <ul>
            { this.props.planetList.map( planet => <Planet planet={ planet } /> )}
            </ul>
        </div>
        )
    }
}

export default PlanetList;