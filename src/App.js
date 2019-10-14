import React from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="card-container">
        <CardList />
      </div>
    </div>
  );
}

export default App;
