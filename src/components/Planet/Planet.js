import React, { Component } from 'react';

class Planet extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <li key={ this.props.planet.name }>{ this.props.planet.name }</li>
        )
    }
}

export default Planet;