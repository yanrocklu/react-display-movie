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
  movies: PropTypes.arrayOf(PropTypes.shape({
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Actors: PropTypes.string.isRequired,
    Plot: PropTypes.string.isRequired
  })).isRequired
}

export default MovieList;
