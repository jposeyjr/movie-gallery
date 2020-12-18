import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '200',
    height: '200',
    justifyContent: 'space-around',
  },
});

class MovieList extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_MOVIES' });
  }

  getDetails = (movie) => {
    this.props.dispatch({ type: 'GET_DETAILS', payload: movie });
    this.props.history.push('/details/' + movie.id);
  };

  addFavorite = (movie) => {
    this.props.dispatch({ type: 'SET_FAVORITE', payload: movie });
  };

  render() {
    const classes = this.props;

    return (
      <div className={classes.root}>
        <h1>Movie List </h1>
        <GridList
          cols={5}
          spacing={25}
          cellHeight={'auto'}
          className={classes.gridList}
        >
          {this.props.reduxState.movies.map((movie, index) => (
            <GridListTile key={movie.id} cols={movie.cols}>
              <h2>{movie.title}</h2>
              <img
                src={movie.poster}
                alt={movie.title}
                onClick={() => this.getDetails(this.movie)}
              />
              <GridListTileBar
                title={movie.title}
                actionIcon={
                  <IconButton
                    aria-label={`add ${movie.title} to favorites`}
                    variant='contained'
                    onClick={() => this.addFavorite(index)}
                  >
                    <StarBorderIcon style={{ color: 'gold' }} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

const stateToProps = (reduxState) => ({
  reduxState,
});

export default withStyles(styles)(connect(stateToProps)(MovieList));
