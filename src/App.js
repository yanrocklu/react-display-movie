import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieContainer from './containers/MovieContainer';

function App() {
  const title = 'React Movie Tiles';

  return (
    <div>
      <Header title={title}/>
      <MovieContainer />
    </div>
  );
}

export default App;
