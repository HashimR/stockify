import React from "react";
import "../../App.css";
import Header from "../common/Header"
import StockDisplay from "../StockDisplay/StockDisplayContainer"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Homepage extends React.Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Header />
          <div className="App-body">
          <StockDisplay />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
