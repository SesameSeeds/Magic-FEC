import React from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";
// import Filter from "./components/Filter";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Filter /> */}
      <CardList />
    </div>
  );
}

export default App;
