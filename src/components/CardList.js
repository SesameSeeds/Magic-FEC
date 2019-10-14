import React, { Component } from "react";
import Card from "./Card";
import Loader from "./Loader";
import SearchBar from "./SearchBar";
import debounce from "lodash.debounce";

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      isLoading: true,
      initialLoading: true,
      initialRender: true,
      allCards: [],
      pageNumber: 1,
      error: false
    };

    window.onscroll = debounce(() => {
      const {
        loadCards,
        state: { error, isLoading }
      } = this;

      // Bails early if:
      // * there's an error
      // * it's already loading
      // * there's nothing left to load
      if (error || isLoading) return;

      // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
        //TODO Investigate how potential styling changes this logic.  Loading works with !== but it messes with search functioning causing a reset after a particular amount of time.
      ) {
        loadCards();
      } else {
        // console.log("not able to call load cards");
      }
    }, 100);
  }

  componentDidMount() {
    this.loadCards(this.state.pageNumber);
  }

  loadCards = () => {
    this.setState({ isLoading: true }, () => {
      fetch(
        `https://cors-anywhere.herokuapp.com/https://api.magicthegathering.io/v1/cards?types=creature&pageSize=30&page=${this.state.pageNumber}&orderBy=name`
      )
        .then(res => res.json())
        .then(res => res.cards.filter(card => card.hasOwnProperty("imageUrl")))
        .then(res => {
          const nextCards = res.map(card => ({
            imageUrl: card.imageUrl,
            name: card.name,
            artist: card.artist,
            setName: card.setName,
            originalType: card.originalType
          }));

          this.setState(prevState => {
            return {
              isLoading: false,
              initialLoading: false,
              cards: [...this.state.cards, ...nextCards],
              pageNumber: prevState.pageNumber + 1
            };
          });
        })

        .catch(err => {
          this.setState({
            error: err.message,
            isLoading: false
          });
        });
    });
  };

  render() {
    return (
      <div className="effing-loader">
        {this.state.initialLoading && <Loader />}
        <div className="effing-search">
          {!this.state.initialLoading && <SearchBar items={this.state.cards} />}
        </div>
        {Object.keys(this.state.cards).map(key => (
          <Card index={key} key={key} details={this.state.cards[key]} />
        ))}
        {this.state.isLoading && this.state.cards.length > 0 && <Loader />}
      </div>
    );
  }
}

export default CardList;
