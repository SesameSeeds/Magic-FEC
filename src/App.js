import React from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";
import ContextProvider from "./ContextProvider";
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <div className="card-container">
          <CardList />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
