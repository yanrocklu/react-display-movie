import React from 'react';
import MovieTile from './MovieTile';
import './MovieList.css';

const MovieList = (props) => {
  const movieList = props.movies.map((movie, index) => {
    return <MovieTile movie={movie} key={index+movie.Title}/>
  });

  return (
    <div className="movie-list">
      {movieList}
    </div>
  )
};

export default MovieList;
