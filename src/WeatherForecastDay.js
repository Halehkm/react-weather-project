import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <ul className="WeatherForecastDay">
      <li className= "forecast day-1">
        <div>{day()}</div>
        {Math.round(props.data.temp.day)}°F{" "}
        <img
          className="forecasticon"
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt=""
          width="30"
        />
      </li>
    </ul>
  );
}
