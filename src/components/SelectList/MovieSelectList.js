import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './MovieSelectList.css';


const MovieSelectList = (props) => {
  // use React Hooks
  const [values, setValues] = React.useState({
    movieObj: '',
  });

  // const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  const dropDownOptions = props.movies.map((movie, index) =>
    <MenuItem value={movie} key={index + movie.imdbID}>
      {movie.Title}
    </MenuItem>
  );

  return (
    <div className="selectListContainer">
      <h3>Select a Movie Name to Display Details</h3>
      <FormControl variant="outlined" style={{ minWidth: 300 }}>
        <InputLabel htmlFor="movie-name">Movies</InputLabel>
        <Select
          value={values.movieObj}
          onChange={handleChange}
          inputProps={{
            name: 'movieObj',
            id: 'movie-name',
          }}
        >
          {dropDownOptions}
        </Select>
      </FormControl>
      <hr />
      {values.movieObj &&
        <MovieCard movie={values.movieObj} />
      }
    </div>
  );
}

MovieSelectList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Actors: PropTypes.string.isRequired,
    Plot: PropTypes.string.isRequired
  })).isRequired
}

export default MovieSelectList;