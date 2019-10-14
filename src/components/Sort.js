import React, { Component } from "react";

class Sort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    };
  }

  render() {
    return (
      <form className="sort-menu">
        <label htmlFor="sortCards" className="sort-text">
          Sort Cards
        </label>
        <select id="sortCards" ref="sortCards" onChange={this.handleChange}>
          <option value="All">All</option>
          <option value="Character Name">Name</option>
          <option value="Artist">Artist</option>
          <option value="Set Name">Set Name</option>
          <option value="Original Typle">Original Type</option>
        </select>
      </form>
    );
  }
}
export default Sort;
