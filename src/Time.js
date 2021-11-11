import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Time(props) {
  console.log(props);

  const [dateInfo, setDateInfo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let apiKey = `24b62e707b504c83a59cadfaa50afb0a`;
    let apiUrl = `https://timezone.abstractapi.com/v1/current_time/?api_key=${apiKey}&location=${props.city}`;

    axios
      .get(apiUrl)
      .then(formatDate)
      .then(() => {
        setLoading(false);
      });
  }, [props.city]);

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

    const fullDate = new Intl.DateTimeFormat("en-US").format(date);
    setDateInfo({
      fullDate,
      day,
      hours,
      minutes,
    });
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="Date">
      <div className="current-date">
        <div>
          {dateInfo.hours}:{dateInfo.minutes}
        </div>
        <div> {dateInfo.day}</div>
        <div>{dateInfo.fullDate}</div>
      </div>
    </div>
  );
}
