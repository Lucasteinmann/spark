import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavBar from './Navbar';

class App extends Component {
  render() {
    return (
      <div>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="title"
            color="inherit"
          >
            My header
         </Typography>
         <NavBar />
        </Toolbar>
      </AppBar>

      </div>
    );
  }
}

export default App;
