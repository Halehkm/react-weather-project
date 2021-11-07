import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  const apiKey = `44d7b9ac8fa1b37377621f35fc9ba5f1`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(forecast);

  function forecast(response) {
    console.log(response.data.daily[0].temp.max);
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <ul>
            <li className="forecast day-1">
              <div>Sat</div>
              18°F <img src={props.data.icon} alt={props.data.description} />
            </li>
            <li className="forecast day-2">
              <div>Sun</div>
              18°F <img src={props.data.icon} alt={props.data.description} />
            </li>
            <li className="forecast day-3">
              <div>Mon</div>
              18°F <img src={props.data.icon} alt={props.data.description} />
            </li>
            <li className="forecast day-4">
              <div>Tue</div>
              18°F <img src={props.data.icon} alt={props.data.description} />
            </li>
            <li className="forecast day-5">
              <div>Wed</div>
              18°F <img src={props.data.icon} alt={props.data.description} />
            </li>
            <li className="forecast day-6">
              <div>Thu</div>
              18°F <img src={props.data.icon} alt={props.data.description} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
