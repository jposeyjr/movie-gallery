import React, { Component } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

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

class Details extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Card component={Card} className={classes.root}>
        <CardContent>
          <Typography variant='h4'>
            {this.props.reduxState.details.title}
          </Typography>
        </CardContent>
        <CardMedia
          component='img'
          className={classes.media}
          image={this.props.reduxState.details.poster}
          alt={this.props.reduxState.details.title}
        />
        <CardContent>
          <Typography variant='p'>
            {this.props.reduxState.details.description}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

const stateToProps = (reduxState) => ({
  reduxState,
});

export default withStyles(styles)(connect(stateToProps)(Details));
