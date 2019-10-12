import React, { Component } from "react";
import Card from "./Card";
import Loader from "./Loader";

class CardList extends Component {
  state = {
    cards: [],
    loading: true
  };

  componentDidMount() {
    fetch(
      'https://cors-anywhere.herokuapp.com/https://api.magicthegathering.io/v1/cards?types="creature"&pageSize=30&page=3&orderBy=name'
    )
      .then(res => res.json())
      .then(res => this.setState({ cards: res.cards, loading: false }))
      .catch(err => console.error(err));
  }

  render() {
    console.log(this.state);
    return this.state.loading ? (
      <Loader />
    ) : (
      <div>
        {Object.keys(this.state.cards).map(key =>
          this.state.cards[key].hasOwnProperty("imageUrl") ? (
            <Card index={key} key={key} details={this.state.cards[key]} />
          ) : (
            ""
          )
        )}
      </div>
    );
  }
}

export default CardList;
