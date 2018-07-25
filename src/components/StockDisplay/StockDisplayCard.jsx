import React, { Component } from "react";
import { Card, CardActions, CardMedia, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import PropTypes from "prop-types";
import logo from "../../assets/logos/alphabet.png";
import Divider from "material-ui/Divider";

class StockDisplayCard extends Component {
  render() {
    // const logo = require("../../assets/logos/" + this.props.name + '.png')
    return (
      <div className="card">
        <Card>
          <CardMedia style={styles.media}>
            <img src={logo} alt="" />
          </CardMedia>

          <CardText style={styles.title}>Alphabet Inc.</CardText>
          <CardText style={styles.subtitle}>Ticker: GOOG</CardText>
          <Divider style={styles.hardDivider} />

          <CardText style={styles.priceTitle}>Today's Opening</CardText>
          <Divider />
          <CardText style={styles.priceTitle}>1240.00</CardText>
          <Divider style={styles.softDivider} />

          <CardText style={styles.priceTitle}>
            Tomorrow's Predicted Opening
          </CardText>
          <Divider />
          <CardText style={styles.priceTitle}>1180.00</CardText>

          <CardActions>
            <RaisedButton label="Predict" secondary={true} />
          </CardActions>
        </Card>
      </div>
    );
  }
}
const styles = {
  title: {
    fontSize: "25px",
    fontWeight: "bold",
    paddingBottom: "0px"
  },
  subtitle: {
    fontSize: "15px",
    fontWeight: "lighter",
    height: "20px"
  },
  priceTitle: {
    fontSize: "20px",
    height: "20px"
  },
  media: {
    height: "150px"
  },
  hardDivider: {
    height: "2px",
    backgroundColor: "black"
  },
  softDivider: {
    height: "2px"
  },
  button: {
    color: "white"
  }
};

StockDisplayCard.propTypes = {
  name: PropTypes.string.isRequired
};

export default StockDisplayCard;
