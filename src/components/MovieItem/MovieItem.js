import React, { Component } from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import InfoIcon from '@material-ui/icons/Info';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    display: 'flex',
    maxWidth: 400,
    height: '100%',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },

  buttons: {
    justifyContent: 'space-between',
  },
});

class MovieItem extends Component {
  state = {
    fav: false,
  };

  addFavorite = (index) => {
    this.setState({ fav: !this.state.fav });
  };

  render() {
    const { classes } = this.props;
    return (
      <Card component={Card} className={classes.root}>
        <CardContent>
          <Typography variant='h4'>{this.props.movie.title}</Typography>
        </CardContent>
        <CardMedia
          component='img'
          className={classes.media}
          image={this.props.movie.poster}
          alt={this.props.movie.title}
          onClick={() => this.props.getDetails(this.props.movie)}
        />
        <CardActions className={classes.buttons}>
          <IconButton
            aria-label={`add ${this.props.movie.title} to favorites`}
            variant='contained'
            onClick={() => this.addFavorite(this.props.movie.id)}
          >
            {this.state.fav ? (
              <StarIcon style={{ color: 'red' }} />
            ) : (
              <StarBorderIcon style={{ color: 'red' }} />
            )}
          </IconButton>
          <IconButton
            aria-label={`Get about ${this.props.movie.title} movie`}
            variant='contained'
            onClick={() => this.props.getDetails(this.props.movie.id)}
          >
            <InfoIcon style={{ color: 'red' }} />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(MovieItem);
