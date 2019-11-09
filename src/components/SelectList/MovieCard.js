import React from 'react';

import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    width: 400,
  },
  media: {
    height: 0,
    paddingTop: '150%',
  },
  rating: {
    fontSize: 14,
  },
  runTime: {
    marginBottom: 12,
  },
  plot: {
    textAlign: "justify",
  },
}));

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

  const classes = useStyles();

  const httpToHttps = url => (url || '').replace(/^http:\/\//i, 'https://');

  return (
    <Card className={classes.card}>
      <CardHeader
        title={Title}
        subheader={Genre}
      />
      <CardMedia
        className={classes.media}
        image={httpToHttps(Poster)}
        title={Title}
      />
      <CardContent>
        {imdbRating !== 'N/A' &&
          <Typography className={classes.rating} color="textSecondary" gutterBottom>
            IMDB Rating: {imdbRating}
          </Typography>
        }
        <Typography variant="h5" component="h2">
          {Actors}
        </Typography>
        {Runtime !== 'N/A' &&
          <Typography className={classes.runTime} color="textSecondary">
            {Runtime}
          </Typography>
        }
        <Typography className={classes.plot} variant="body2">
          {Plot}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MovieCard;