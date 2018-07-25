import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardMedia,
  CardText,
  CardHeader
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import PropTypes from "prop-types";
import logo from "../../assets/logos/alphabet.png";

class StockDisplayCard extends Component {
  render() {
    // const logo = require("../../assets/logos/" + this.props.name + '.png')
    return (
      <div className="card">
        <Card>
          <CardMedia style={styles.media}>
            <img src={logo} alt="" />
          </CardMedia>
          <CardText style={styles.title}>
            Alphabet Inc.
          </CardText>
          <CardText style={styles.subtitle}>
            Ticker: GOOG
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
            vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
            pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque
            lobortis odio.
          </CardText>
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
  media: {
    height: "150px"
  }
};

StockDisplayCard.propTypes = {
  name: PropTypes.string.isRequired
};

export default StockDisplayCard;
