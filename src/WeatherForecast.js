import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState({});
  function forecast(response) {
    setForecastData({
      temp: Math.round(response.data.daily[0].temp.max),
      icon: `http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`,
      day: response.data.daily[0].dt * 1000,
    });
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = `44d7b9ac8fa1b37377621f35fc9ba5f1`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(forecast);

    return null;
  }
}
