import React from 'react';
import MovieTile from './MovieTile';
import './MovieList.css';

const MovieList = (props) => {
  console.log(props.movies);
  const movieList = props.movies.map(movie => {
    return <MovieTile movie={movie} />
  });

  return (
    <div className="movie-list">
      {movieList}
    </div>
  )
};


export default MovieList;
