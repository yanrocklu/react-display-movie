import React, { Component, Fragment } from 'react';
// import './DisplayMovieApp.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from '../components/Header/Header';
import MovieList from '../components/Tiles/MovieList';
import MovieSelectList from '../components/SelectList/MovieSelectList';
import Home from '../components/Home';

import axios from '../services/axios-movies';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


class DisplayMovieApp extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    const movieJsonUrl = '/movies.json';
    // const movieJsonUrl = 'https://api.github.com/users/hadley/repos';

    axios.get(movieJsonUrl)
      .then(response => response.data)
      .then((data) => {
        !!data && this.setState({ movies: data })
      }, error => {
        console.log('fetch data error: ', error);
      })
  }

  /*   
    React Router paths don’t match after deploying to GitHub Pages
    To solve this:
    have to use 
    <Router basename={process.env.PUBLIC_URL}>
    instead of 
    <Router> 
    */

  render() {
    const title = 'React Movie Posters';
    const movies = this.state.movies;
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Header title={title} />
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs value={location.pathname}>
                <Tab label="Home" component={Link} to="/" value="/" />
                <Tab label="Movie Tiles" component={Link} to="/tiles" value="/tiles" />
                <Tab label="Movie Select List" component={Link} to="/list" value="/list" />
              </Tabs>
              <Switch>
                <Route exact path="/" render={() => <Home movies={movies} />} />
                <Route
                  path="/tiles"
                  render={() => <MovieList movies={movies} />}
                />
                <Route
                  path="/list"
                  render={() => <MovieSelectList movies={movies} />}
                />
              </Switch>
            </Fragment>
          )}
        />
      </Router>
    );
  }
}

export default DisplayMovieApp;
