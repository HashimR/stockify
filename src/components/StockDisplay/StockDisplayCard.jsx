import React, { Component } from "react";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import PropTypes from "prop-types";

class StockDisplayCard extends Component {
  render() {
    // const logo = require("../../assets/logos/" + this.props.name + '.png')
    return (
      <div className="card">
        <Card>
          <CardHeader
            title={this.props.name}
            subtitle="Subtitle"
            avatar="placeholder"
          />
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

StockDisplayCard.propTypes = {
  name: PropTypes.string.isRequired
};

export default StockDisplayCard;
