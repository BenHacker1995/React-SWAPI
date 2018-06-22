import React, { Component } from 'react';
// import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import PlanetList from '../PlanetList/PlanetList';
import PeopleList from '../PeopleList/PeopleList';
import StarshipList from '../StarshipList/StarshipList';


class App extends Component {

  constructor( props ) {
    super( props );
  }

  // axios eq. of jQuery onReady

  // componentDidMount() {
  //   console.log( 'App component mounted' );
  //   this.getPlanets( 'https://swapi.co/api/planets/?format=json' );
  // }

  // // One way to GET
  // getPlanets( nextUrl ){
  //   if ( nextUrl != null ) {
  //     axios.get( nextUrl )
  //       .then( ( response ) => {
  //         this.setState( { planetList:
  //           [ ...this.state.planetList, ...response.data.results ] } )
  //         nextUrl = response.data.next;
  //         this.getPlanets( nextUrl )
  //       }).catch( ( error ) => {
  //         console.log( 'Error occurred: ', error );
  //       });
  //   }
  // }

  // Another Way to GET (async/await)
  // async getPlanets = ( nextUrl ) => {
  //   while ( nextUrl != null ) {
  //     await axios.get( nextUrl )
  //       .then( ( response ) => {
  //         this.setState( { planetList:
  //           [ ...this.state.planetList, ...response.data.results ] } )
  //         nextUrl = response.data.next;
  //       }).catch( ( error ) => {
  //         console.log( 'Error occurred: ', error );
  //       })
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/planets'>Planets</Link></li>
              <li><Link to='/people'>People</Link></li>
              <li><Link to='/starships'>Starships</Link></li>
            </ul>

            <Route exact path='/' component={ Home }/>
            <Route path='/planets' component={ PlanetList }/>
            <Route path='/people' component={ PeopleList }/>
            <Route path='/starships' component={ StarshipList }/>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;

