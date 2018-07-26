import React, { Component } from "react";
import { Card, CardActions, CardMedia, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import PropTypes from "prop-types";
import logo from "../../assets/logos/alphabet.png";
import Divider from "material-ui/Divider";
import axios from "axios";

class StockDisplayCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      predictedPrice: "-",
      predictClicked: false
    };
    this.predict = this.predict.bind(this);
  }

  predict() {
    axios.get("http://127.0.0.1:5000/predict?stock=goog").then(res => {
      this.setState({
        predictedPrice: res.data["price"],
        predictClicked: true
      });
    });
  }

  render() {
    return (
      <div className="card">
        <Card>
          <CardMedia style={styles.media}>
            <img src={logo} alt="" />
          </CardMedia>

          <CardText style={styles.title}>
            {stocks[this.props.stock].title}
          </CardText>
          <CardText style={styles.subtitle}>
            Ticker: {stocks[this.props.stock].subtitle}
          </CardText>
          <Divider style={styles.hardDivider} />

          <CardText style={styles.priceTitle}>Previous Open</CardText>
          <Divider />
          <CardText style={styles.priceTitle}>1240.00</CardText>
          <CardText style={styles.priceTitle}>Previous Close</CardText>
          <Divider />
          <CardText style={styles.priceTitle}>1240.00</CardText>
          <Divider style={styles.softDivider} />

          <CardText style={styles.priceTitle}>Next Predicted Close</CardText>
          <Divider />

          <CardText style={styles.priceTitle}>
            {this.state.predictedPrice}
          </CardText>

          <CardActions>
            <RaisedButton
              label="Predict"
              secondary={true}
              disabled={this.predictClicked}
              onClick={this.predict}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

const stocks = {
  goog: {
    imageURL: "alphabet.png",
    title: "Alphabet Inc",
    subtitle: "GOOG"
  },
  aapl: {
    title: "Apple",
    subtitle: "AAPL"
  }
};

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
  name: PropTypes.string.isRequired,
  stock: PropTypes.string.isRequired
};

export default StockDisplayCard;
