import React, { Component } from 'react';
import People from '../People/People';
import axios from 'axios';




class PeopleList extends Component {

    constructor( props ) {
        super( props );
        this.state = { peopleList: [] }
      }

    componentDidMount() {
        console.log( 'App component mounted' );
        this.getPeople( 'https://swapi.co/api/people/?format=json' );
      }

      // One way to GET
  getPeople( nextUrl ){
    if ( nextUrl != null ) {
      axios.get( nextUrl )
        .then( ( response ) => {
          this.setState( { peopleList:
            [ ...this.state.peopleList, ...response.data.results ] } )
          nextUrl = response.data.next;
          this.getPeople( nextUrl )
        }).catch( ( error ) => {
          console.log( 'Error occurred: ', error );
        });
    }
  }

    render() {
        return (
        <div>
            <h2>All Planets in Star Wars Universe</h2>
            <ul>
            { this.state.peopleList.map( people => <People people={ people } /> )}
            </ul>
        </div>
        )
    }
}

export default PeopleList;