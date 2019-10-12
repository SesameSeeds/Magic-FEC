import React, { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <iframe
          src="https://giphy.com/embed/DDe8RfqPKEgiA"
          width="480"
          height="270"
          frameBorder="0"
          title="loader"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default Loader;
