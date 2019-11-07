import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './MovieCard.css';

const MovieCard = (props) => {
  const {
    Actors,
    imdbRating,
    Title,
    Genre,
    Plot,
    Poster,
    Runtime
  } = props.movie;

  const httpToHttps = url => (url || '').replace(/^http:\/\//i, 'https://');

  return (
    <Card className="card">
      <CardHeader
        title={Title}
        subheader={Runtime}
      />
      <CardMedia
        className="media"
        image={httpToHttps(Poster)}
        title={Title}
      />
      <CardContent>
        <Typography className="title" color="textSecondary" gutterBottom>
          {Genre}
        </Typography>
        <Typography variant="h5" component="h2">
          {Actors}
        </Typography>
        <Typography className="pos" color="textSecondary">
          IMDB Rating: {imdbRating}
        </Typography>
        <Typography variant="body2" component="p">
          {Plot}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MovieCard;