import React from 'react';
import './movie.css';

const Movie = props => {
  const {
    title,
    year,
    rating,
    review,
    genre,
    country,
    copies
  } = props.movie;

  return (
    <div className="outBox">
      <table className="table">
        <tr>title: {title}</tr>
        <tr>year: {year}</tr>
        <tr>rating: {rating}</tr>
        <tr>review: {review}</tr>
        <tr>genre: {genre}</tr>
        <tr>country: {country}</tr>
        <tr>copies: {copies}</tr>
      </table>
    </div>
  );

}

export default Movie;
