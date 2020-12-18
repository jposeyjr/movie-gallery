import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';
import { Tab, Tabs, AppBar, Typography } from '@material-ui/core';

class App extends Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  // Renders the entire app on the DOM
  render() {
    return (
      <div className='App'>
        <Router>
          <AppBar position='static'>
            <Typography variant='h1' align='center'>
              Movie List!
            </Typography>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              aria-label='navigation bar with home tab'
              centered
            >
              <Tab label='Home' to='/' component={Link} />
              <Tab label='Add Movie' to='/add-movie' component={Link} />
            </Tabs>
          </AppBar>
          <Route exact path='/' component={MovieList} />
          <Route path='/details' component={Details} />
          <Route path='/add-movie' component={AddMovie} />
        </Router>
      </div>
    );
  }
}

export default App;
