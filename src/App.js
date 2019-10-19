import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './components/movie';
import loadMovies from './movie';

function App() {
  const movieArray = loadMovies;
  const movieList = movieArray.map(movie => {
    return <Movie movie={movie} />
  });

  return (
    <div>
      <h1>Movie List</h1>
      {movieList}
    </div>
  );
}

export default App;
