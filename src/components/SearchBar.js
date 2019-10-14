import React, { Component } from "react";
import Card from "./Card";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
      isSearching: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      filtered: this.items
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
  }

  handleChange(e) {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== "") {
      this.setState({ isSearching: true });

      // Assign the original list to currentList
      currentList = this.props.items;

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.name.toString().toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      this.setState({ isSearching: false });
      // If the search bar is empty, set newList to original task list
      newList = this.props.items;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="input"
          onChange={this.handleChange}
          placeholder="Search for a card..."
        />
        {this.state.filtered && this.state.filtered.length > 0 && this.state.isSearching && (
          <ul>
            {this.state.filtered.map(item => (
              <Card details={item}></Card>
            ))}
          </ul>
        )}
        {this.state.filtered && this.state.filtered.length < 1 && <div>Sorry. No matches.</div>}
      </div>
    );
  }
}

export default SearchBar;
