// import movies from './movie.json';
import axios from 'axios';


// const getMovies = () => {
//   return movies ? movies : [];
// }

const movieJsonUrl = 'https://github.com/yanrocklu/react-display-movie/blob/master/src/services/movie.json';

const getMovies = () => axios.get(movieJsonUrl)
      .then(res => {
        console.log(res);
        return res.data;
        // this.setState({ persons });
      })


export default { getMovies };