import React, { Component } from 'react';

class Planet extends Component {
    render() {
        return (
            <li key={ this.props.planet.url }>{ this.props.planet.name }</li>
        )
    }
}

export default Planet;