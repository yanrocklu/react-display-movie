import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './MovieSelectList.css';


const MovieSelectList = (props) => {
  // use React Hooks
  const [values, setValues] = React.useState({
    movieObj: ''
    // movieImdbId: ''
  });

  let { path, url } = useRouteMatch();
  console.log('inside MovieSelectList, useRouteMatch() = ' + JSON.stringify(useRouteMatch()));

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  // const dropDownOptions = props.movies.map((movie, index) =>
  //   <MenuItem value={movie} key={index + movie.imdbID}>
  //     {movie.Title}
  //   </MenuItem>
  // );

  const dropDownOptions = props.movies.map(movie =>
    <MenuItem value={movie} key={movie.imdbID}>
      <Link className="selectLink" to={`${url}/${movie.imdbID}`}>{movie.Title}</Link>
      {/* <Link className="selectLink" to={`${url}/${values.movieImdbId}`}>{movie.Title}</Link> */}
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
      {/* {values.movieObj &&
        <MovieCard movie={values.movieObj} />
      } */}

      <Switch>
        <Route exact path={path}>
          <h3>Please select a movie.</h3>
        </Route>
        {values.movieObj &&
          <Route
            path={`${path}/:imdbId`}
            render={() => <MovieCard movie={values.movieObj} />}
          />}
      </Switch>
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