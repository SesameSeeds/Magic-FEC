import React from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";
import Sort from "./components/Sort";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Sort />
      <div className="card-container">
        <CardList />
      </div>
    </div>
  );
}

export default App;
