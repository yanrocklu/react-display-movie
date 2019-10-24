import React from 'react';
import PropTypes from 'prop-types';

import MovieTile from './MovieTile';
import './MovieList.css';

const MovieList = (props) => {
  const movieList = props.movies.map((movie, index) => {
    return <MovieTile movie={movie} key={index + movie.Title} />
  });

  return (
    <div className="movie-list">
      {movieList}
    </div>
  )
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
}

export default MovieList;
