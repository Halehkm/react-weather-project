import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.day);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <ul className="WeatherForecastDay">
      <li className="forecast day-1">
        <div>{day()}</div>
        {props.data.temp}°F <img src={props.data.icon} alt="" />
      </li>
      {/*  <li className="forecast day-2">
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
        </li> */}
    </ul>
  );
}