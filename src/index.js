import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { MuiThemeProvider } from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#f48942',
  },
  appBar: {
    height: 50,
  },
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}><App /></MuiThemeProvider>,
  document.getElementById('root')
);
