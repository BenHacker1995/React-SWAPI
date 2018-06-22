import React, { Component } from 'react';

class People extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <li key={ this.props.people.name }>{ this.props.people.name }</li>
        )
    }
}

export default People;