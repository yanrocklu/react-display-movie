import React, { Component, Fragment } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header/Header';
import MovieList from './components/Tiles/MovieList';
import MovieSelectList from './components/SelectList/MovieSelectList';
import Home from './components/Home';

import axios from './services/axios-movies';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    const movieJsonUrl = '/movies.json';

    axios.get(movieJsonUrl)
      .then(response => response.data)
      .then((data) => {
        data && this.setState({ movies: data })
      }, error => {
        console.log(error);
      })
  }

  render() {
    const title = 'React Movie Posters';
    const movies = this.state.movies;
    return (
      <Router>
        <Header title={title} />
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs value={location.pathname}>
                <Tab label="Home" component={Link} to="/" value="/" />
                <Tab label="Movie Select List" component={Link} to="/list" value="/list" />
                <Tab label="Movie Tiles" component={Link} to="/tiles" value="/tiles" />
              </Tabs>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route
                  path='/list'
                  render={() => <MovieSelectList movies={movies} />}
                />
                <Route
                  path='/tiles'
                  render={() => <MovieList movies={movies} />}
                />
              </Switch>
            </Fragment>
          )}
        />
      </Router>
    );
  }

}

export default App;
