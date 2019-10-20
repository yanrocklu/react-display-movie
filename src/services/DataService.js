import movies from './movie.json';

const getMovies = () => {
  return movies ? movies : [];
}

export default { getMovies };