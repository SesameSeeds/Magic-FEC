import React, { Component } from "react";
import AppContext from "./AppContext";

class ContextProvider extends Component {
  state = {
    sort: "name"
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          sort: this.state.sort,
          setSort: val => this.setState({ sort: val })
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default ContextProvider;
