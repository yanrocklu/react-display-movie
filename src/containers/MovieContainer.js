import React, { Component } from 'react';
import DataService from '../services/DataService';
import MovieList from '../components/MovieList';

class MovieContainer extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.setState(() => ({
      movies: DataService.getMovies()
    })
    );
  }

  render() {
    console.log(this.state.movies);
    return (
      <div className="movie-container">
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default MovieContainer;