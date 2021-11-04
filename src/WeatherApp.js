import React, { useState } from "react";
import axios from "axios";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function weatherDetail(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="row">
        <div>
          <form>
            <input
              className="search-box"
              type="text"
              placeholder="Enter city"
            />
            <input className="search-btn" type="submit" value="Search ☀" />
            <input className="currentLocation-btn" type="submit" value="Now" />
          </form>
        </div>
        <div className="col-sm city">{weatherData.city}</div>
        <div className="col-sm">
          <img
            className="weather-icon"
            src={weatherData.icon}
            alt={weatherData.description}
          />
        </div>
        <div className="col-sm temp">
          <span className="temp">{weatherData.temp}</span>
          <span className="units">
            {(
              <a href="/" className="active">
                °F
              </a>
            ) | <a href="/">°C</a>}
          </span>
        </div>

        <div className="current-date">
          <div>12:20</div>
          <div> Monday</div>
          <div>11/03/21</div>
        </div>
        <div className="col-6 ">
          <ul className="temp-details">
            <li className="temp-desc text-capitalize">
              {weatherData.description}
            </li>
            <li className="humidity">Humidity: {weatherData.humidity} %</li>
            <li className="wind-speed">Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
        <footer>
          <a
            className="footer"
            href="https://github.com/Halehkm/react-weather-project"
            target="blank"
          >
            Open-source code
          </a>{" "}
          by Haleh Motlagh
        </footer>
      </div>
    );
  } else {
    const apiKey = `44d7b9ac8fa1b37377621f35fc9ba5f1`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(weatherDetail);

    return "Loading...";
  }
}
