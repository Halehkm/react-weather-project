import React, { useState } from "react";
import axios from "axios";

export default function Date(props) {
  const [dateInfo, setDateInfo] = useState({});

  let apiKey = `24b62e707b504c83a59cadfaa50afb0a`;
  let apiUrl = `https://timezone.abstractapi.com/v1/current_time/?api_key=${apiKey}&location=${props.defaultCity}`;
  axios.get(apiUrl).then(formatDate);

  function formatDate(response) {
    let date = new Date(response.data.datetime);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    let month = date.getMonth() + 1;
    let DD = date.getDate();
    let year = date.getFullYear();
    setDateInfo({
      year,
      DD,
      month,
      day,
      hours,
      minutes,
    });
  }
  return (
    <div className="Date">
      <div className="current-date">
        <div>12:20</div>
        <div> {dateInfo.day}</div>
        <div>11/03/21</div>
      </div>
    </div>
  );
}
