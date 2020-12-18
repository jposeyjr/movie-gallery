import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MovieItem from '../MovieItem/MovieItem';

const styles = (theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'red',
  },
  smMargin: {
    margin: theme.spacing(1),
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

  render() {
    const classes = this.props;

    return (
      <Grid
        className={classes.container}
        container
        alignItems='stretch'
        spacing={2}
      >
        {this.props.reduxState.movies.map((movie, index) => (
          <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
            <MovieItem
              movie={movie}
              getDetails={this.getDetails}
              index={index}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

const stateToProps = (reduxState) => ({
  reduxState,
});

export default withStyles(styles)(connect(stateToProps)(MovieList));
