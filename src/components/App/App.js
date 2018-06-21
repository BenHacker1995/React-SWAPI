import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';

class App extends Component {

  constructor( props ) {
    super( props );
    this.state = { planetList: [] }
  }

  // axios eq. of jQuery onReady

  componentDidMount() {
    console.log( 'App component mounted' );
    this.getPlanets( 'https://swapi.co/api/planets/?format=json' );
  }
  
  getPlanets( nextUrl ) {
    if ( nextUrl != null ) {
      axios.get( nextUrl )
        .then( ( response ) => {
          this.setState( { planetList:
            [ ...this.state.planetList, ...response.data.results ] } )
          nextUrl = response.data.next;
          this.getPlanets( nextUrl )
        }).catch( ( error ) => {
          console.log( 'Error occurred: ', error );
        })
    }
  }


  render() {
    return (
      <div className="App">
        <Header />
      <ul>
      { this.state.planetList.map( planet =>
        <li key={ planet.url }>{ planet.name }</li> ) }
      </ul>
      </div>
    );
  }
}

export default App;