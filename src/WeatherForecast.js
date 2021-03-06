import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    let apiKey = `44d7b9ac8fa1b37377621f35fc9ba5f1`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(forecast);
  }, [props.coordinates.lat, props.coordinates.lon]);

  function forecast(response) {
    setForecastData(response.data.daily);
  }
  return (
    <div className="WeatherForecast">
      <div>
        {forecastData.map(function (dailyForecast, index) {
          if (index < 6) {
            return (
              <div className={`forecast day-${index}`} key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
