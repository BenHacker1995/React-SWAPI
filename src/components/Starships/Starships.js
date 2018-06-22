import React, { Component } from 'react';

class Starships extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <li key={ this.props.starship.name }>{ this.props.starship.name }</li>
        )
    }
}

export default Starships;