import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const apiKey = `44d7b9ac8fa1b37377621f35fc9ba5f1`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(weatherDetail);
  }, [props.city]);

  function weatherDetail(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCityChange(event) {
    props.setCity(event.target.value);
  }

  return (
    <div className="row">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="search-box"
            type="text"
            placeholder="Enter city"
            onChange={handleCityChange}
          />
          <input className="search-btn" type="submit" value="Search ☀" />
        </form>
      </div>

      <WeatherInfo data={weatherData} />
      {weatherData.coordinates && (
        <WeatherForecast
          data={weatherData}
          coordinates={weatherData.coordinates}
        />
      )}

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
}
