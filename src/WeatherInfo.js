import React from "react";
import FormattedDate from "./FormattedDate";
/* import Time from "./Time"; */

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-sm city">{props.data.city}</div>
        <div className="col-sm">
          <img
            className="weather-icon"
            src={props.data.icon}
            alt={props.data.description}
          />
        </div>
        <div className="col-sm temp">
          <span className="temp">{props.data.temp}</span>
          <span className="units">
            {(
              <a href="/" className="active">
                °F
              </a>
            ) | <a href="/">°C</a>}
          </span>
        </div>

        {/* <Time city="chicago"/> */}
        <FormattedDate date={props.data.date} />
        <div className="col-6 ">
          <ul className="temp-details">
            <li className="temp-desc text-capitalize">
              {props.data.description}
            </li>
            <li className="humidity">Humidity: {props.data.humidity} %</li>
            <li className="wind-speed">Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
