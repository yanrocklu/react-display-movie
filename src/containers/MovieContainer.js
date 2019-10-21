import React, { Component } from 'react';
import MovieList from '../components/MovieList';
import axios from '../services/axios-movies';


class MovieContainer extends Component {
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
    return (
      <div className="movie-container">
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default MovieContainer;