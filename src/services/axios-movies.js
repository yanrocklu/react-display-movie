import axios from 'axios';

// create an axios instance
const axiosInstance = axios.create({
  // fetch data from Firebase
  baseURL: 'https://react-display-movie-c4fc7.firebaseio.com/'
});

export default axiosInstance;