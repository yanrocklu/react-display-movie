import React, { Component } from 'react';
// import DataService from '../services/DataService';
import MovieList from '../components/MovieList';
import axios from 'axios';


class MovieContainer extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const movieJsonUrl = 'https://github.com/yanrocklu/react-display-movie/blob/master/src/services/movie.json';
    // const movieJsonUrl = 'https://github.com/yanrocklu/react-display-movie/blob/master/src/services/movie.js';
    console.log(movieJsonUrl);
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

    axios.get(movieJsonUrl, { 
      crossdomain: true,
      headers: {"Access-Control-Allow-Origin": "*"} 
    })
      .then(response => {
        console.log('response: ' + JSON.stringify(response));
        return response.data
      })
      .then((data) => {
        console.log('data: ' + data);

        this.setState({ movies: data })
        console.log(this.state.movies)
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