import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div key={this.props.index}>
        <img alt={this.props.details.name} src={this.props.details.imageUrl} />
        <div>Name: {this.props.details.name}</div>
        <div>Artist: {this.props.details.artist}</div>
        <div>Set Name: {this.props.details.setName}</div>
        <div>Original Type: {this.props.details.originalType}</div>
      </div>
    );
  }
}

export default Card;
