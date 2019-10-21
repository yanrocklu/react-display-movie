import React, { Component } from 'react';
// import DataService from '../services/DataService';
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
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // const movieJsonUrl = 'https://github.com/yanrocklu/react-display-movie/blob/master/src/services/movie.json';
    const movieJsonUrl = 'https://react-display-movie.firebaseio.com/react-display-movie.json';
    // const movieJsonUrl = 'https://github.com/yanrocklu/react-display-movie/blob/master/src/services/movie.js';
    // this.setState(() => ({
    //   movies: DataService.getMovies()
    // })
    // );

    // axios.get(movieJsonUrl)
    //   .then(res => {
    //     console.log('res: ' + res);
    //     const moivies = res.data;
    //     this.setState({ moivies });
    //   })
    // console.log(this.state.movies);

    axios.get(movieJsonUrl)
      .then(response => {
        console.log(response);
        return response.data;
      })
      .then((data) => {
        data && this.setState({ movies: data })
        console.log(this.state.movies)
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