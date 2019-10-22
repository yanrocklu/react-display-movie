import React from 'react';
import './MovieTile.css';

const MovieTile = (props) => {
  const movie = props.movie;

  // the poster img url in the json file are http, which will cause a '403 ERROR'.
  // That is a common setup to limit the amount of hotlinking to images (when people link directly to image files on other hosts). Hot-linking is often prevented, because it causes traffic without actually getting a site real visitors.
  // So a workaround is change the http to https
  const httpToHttps = url => url.replace(/^http:\/\//i, 'https://');

  return (
    <div className="movie-card">
      <img className="card-img-top" src={httpToHttps(movie.Poster)} alt={movie.Poster} />
      <div className="card-body">
        <h2 className="card-title">{movie.Title}</h2>
        <h4 className="card-subtitle">{movie.Actors}</h4>
        <p className="text-justify" style={{ fontSize: '14px' }}>{movie.Plot}</p>
      </div>
    </div>
  );
}

export default MovieTile;
