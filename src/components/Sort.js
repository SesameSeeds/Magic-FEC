import React, { Component } from "react";
import AppContext from "../AppContext";

class Sort extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <form className="sort-menu">
            <label htmlFor="sortCards" className="sort-text">
              Sort Cards
            </label>
            <select id="sortCards" onChange={ (event) => { context.setSort(event.target.value) }} value={context.sort}>
              <option value="name">Name</option>
              <option value="artist">Artist</option>
              <option value="setName">Set Name</option>
              <option value="originalType">Original Type</option>
            </select>
          </form>
        )}
        </AppContext.Consumer>
    );
  }
}
export default Sort;
