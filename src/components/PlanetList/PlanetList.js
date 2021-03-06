import React, { Component } from 'react';
import Planet from '../Planet/Planet';
import axios from 'axios';




class PlanetList extends Component {

    constructor( props ) {
        super( props );
        this.state = { planetList: [] }
      }

    componentDidMount() {
        console.log( 'App component mounted' );
        this.getPlanets( 'https://swapi.co/api/planets/?format=json' );
      }

      // One way to GET
  getPlanets( nextUrl ){
    if ( nextUrl != null ) {
      axios.get( nextUrl )
        .then( ( response ) => {
          this.setState( { planetList:
            [ ...this.state.planetList, ...response.data.results ] } )
          nextUrl = response.data.next;
          this.getPlanets( nextUrl )
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
            { this.state.planetList.map( planet => <Planet planet={ planet } /> )}
            </ul>
        </div>
        )
    }
}

export default PlanetList;