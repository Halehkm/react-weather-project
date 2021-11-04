import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import WeatherApp from "./WeatherApp";
import "./WeatherApp.css";

function App() {
  return (
    <div className="App container">
      <WeatherApp defaultCity="Chicago"/>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
