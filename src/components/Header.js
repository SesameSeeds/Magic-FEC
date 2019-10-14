import React, { Component } from "react";
import Sort from "./Sort";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="Header">
          <img src="./MagicBanner.jpg" className="Magic-Banner" alt="Magic Banner" />
        </header>
        <Sort />
      </div>
    );
  }
}
export default Header;
