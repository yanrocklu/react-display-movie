import axios from 'axios';

// create an axios instance
const axiosInstance = axios.create({
  baseURL: 'https://react-display-movie-c4fc7.firebaseio.com/'
});

export default axiosInstance;