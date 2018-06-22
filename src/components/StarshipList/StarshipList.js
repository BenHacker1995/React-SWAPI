import React, { Component } from 'react';
import Starships from '../Starships/Starships';
import axios from 'axios';




class StarshipList extends Component {

    constructor( props ) {
        super( props );
        this.state = { starshipList: [] }
      }

    componentDidMount() {
        console.log( 'App component mounted' );
        this.getStarships( 'https://swapi.co/api/starships/?format=json' );
      }

      // One way to GET
  getStarships( nextUrl ){
    if ( nextUrl != null ) {
      axios.get( nextUrl )
        .then( ( response ) => {
          this.setState( { starshipList:
            [ ...this.state.starshipList, ...response.data.results ] } )
          nextUrl = response.data.next;
          this.getStarships( nextUrl )
        }).catch( ( error ) => {
          console.log( 'Error occurred: ', error );
        });
    }
  }

    render() {
        return (
        <div>
            <h2>All Starships in Star Wars Universe</h2>
            <ul>
            { this.state.starshipList.map( starship => <Starships starship={ starship } /> )}
            </ul>
        </div>
        )
    }
}

export default StarshipList;