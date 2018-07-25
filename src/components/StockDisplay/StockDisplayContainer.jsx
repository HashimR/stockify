import React, { Component } from "react";
import StockDisplayCard from "./StockDisplayCard"
import "../../App.css";

export default class StockDisplay extends Component {
  render() {
    return (
      <div>
      <StockDisplayCard name= "Google" />
      </div>
    );
  }
}