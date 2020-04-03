import React from "react";
import ReactDOM from "react-dom";
import Clocks from "./components/Clocks";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Timezones</h1>
      <Clocks />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
