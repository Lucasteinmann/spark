import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import NavBar from './Navbar';

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#36393F',
      },
    },
  },
);

console.log('theme: ', theme);

class App extends React.PureComponent {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
            >
            Spark
            </Typography>
            <NavBar />
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
  }
}

export default App;
