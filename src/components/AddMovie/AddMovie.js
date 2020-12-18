import React, { Component } from 'react';
import { TextField, Button, Select, Paper, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: 680,
    margin: theme.spacing(4),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  select: {
    maxWidth: 345,
    margin: theme.spacing(1),
  },
  buttons: {
    maxWidth: 400,
    margin: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const initState = {
  title: '',
  image_url: '',
  desc: '',
  genres: '',
};
class AddMovie extends Component {
  state = {
    title: '',
    image_url: '',
    desc: '',
    genres: '',
  };

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_GENERES' });
  }

  handleSubmit = (e) => {
    //add stuff
  };

  handleCancel = (e) => {
    this.setState(() => initState);
  };

  handleChange = (e) => {
    this.setState({ genres: e.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <form
          autoComplete='off'
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={this.handleSubmit}
        >
          <TextField
            name='title'
            variant='outlined'
            helperText='title for movie'
            label='Movie Title'
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <TextField
            name='imageUrl'
            variant='outlined'
            helperText='link to image of your movie poster'
            label='Movie Image URL'
            value={this.state.image_url}
            onChange={(e) => this.setState({ image_url: e.target.value })}
          />
          <TextField
            name='desc'
            variant='outlined'
            helperText='description of your movie'
            label='Description of movie'
            value={this.state.desc}
            onChange={(e) => this.setState({ desc: e.target.value })}
          />
          <Select
            className={classes.select}
            labelId='genres-label'
            id='genres'
            value={this.state.genres}
            onChange={this.handleChange}
            label='Genres'
          >
            {this.props.reduxState.genres.map((el) => (
              <MenuItem key={el.id} value={el.id}>
                {el.name}
              </MenuItem>
            ))}
          </Select>
          <div className={classes.buttons}>
            <Button
              variant='contained'
              color='primary'
              size='large'
              type='submit'
            >
              Submit
            </Button>
            <Button
              variant='contained'
              color='secondary'
              size='large'
              onClick={() => this.handleCancel()}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Paper>
    );
  }
}
const stateToProps = (reduxState) => ({
  reduxState,
});

export default withStyles(styles)(connect(stateToProps)(AddMovie));
