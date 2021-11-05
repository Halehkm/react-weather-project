import React, {useState} from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import WeatherApp from "./WeatherApp";
import "./WeatherApp.css";

function App() {
  const [city, setCity] = useState("Chicago");
  return (
    <div className="App container">
      <WeatherApp city={city} setCity={setCity}/>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
