import React, { Component } from "react";
import Card from "./Card";

// const MagicData = [
//   {
//     imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=132072&type=card",
//     name: "Academy Researchers",
//     artist: "Stephen Daniele",
//     setName: "Tenth Edition",
//     originalType: "Creature - Human Wizard"
//   },
//   {
//     imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=132072&type=card",
//     name: "Academy Researchers2",
//     artist: "Stephen Daniele",
//     setName: "Tenth Edition",
//     originalType: "Creature - Human Wizard"
//   },
//   {
//     imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=132072&type=card",
//     name: "Academy Researchers3",
//     artist: "Stephen Daniele",
//     setName: "Tenth Edition",
//     originalType: "Creature - Human Wizard"
//   }
// ];

class CardList extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    fetch(
      'https://cors-anywhere.herokuapp.com/https://api.magicthegathering.io/v1/cards?types="creature"&pageSize=30&page=3&orderBy=name'
    )
      .then(res => res.json())
      .then(res => this.setState({ cards: res.cards }))
      .catch(err => console.error(err));
  }

  render() {
    console.log(this.state);
    return (
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
