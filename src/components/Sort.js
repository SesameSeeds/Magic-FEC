import React, { Component } from "react";

class Sort extends Component {
  constructor() {
    super();
    this.state = {
      cardSort: 0
    };
  }

  handleFormInput(cardSort) {
    this.setState({
      cardSort: cardSort
    });
  }

  render() {
    return (
      <div className="sort">
        <SortMenu cardSort={this.state.cardSort} onFormInput={this.handleFormInput} />
      </div>
    );
  }
}

class SortMenu extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onFormInput(this.refs["sortCards"].getDOMNode().value);
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
