import React, { Component } from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
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
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
});

class MovieItem extends Component {
  state = {
    fav: false,
  };

  addFavorite = (index) => {
    console.log(index);
    this.setState({ fav: !this.state.fav });
  };
  render() {
    const classes = this.props;
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
        <CardActions>
          <IconButton
            aria-label={`add ${this.props.movie.title} to favorites`}
            variant='contained'
            onClick={() => this.addFavorite(this.props.index)}
          >
            {this.state.fav ? (
              <StarIcon style={{ color: 'red' }} />
            ) : (
              <StarBorderIcon style={{ color: 'red' }} />
            )}
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(MovieItem);
