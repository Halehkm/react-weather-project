import React, { useState } from "react";

export default function UnitConv(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "fahrenheit") {
    return (
      <div className="UnitConv">
          <div className="row">
        <div className="col-sm temp">
          <span className="temp">{props.fahrenheit}</span>
        </div>{" "}
        <span className="units">
          <span>°F</span>|{" "}
          <a href="/" onClick={convertToC}>
            °C
          </a>
        </span>
      </div>
      </div>
    );
  } else {
    let celsius = (props.fahrenheit - 32) * (5 / 9);
    return (
      <div className="UnitConv">
          <div className="row">
        <div className="col-sm temp">
          <span className="temp">{Math.round(celsius)}</span>
        </div>
        <span className="units">
          <a href="/" onClick={convertToF}>
            °F
          </a>
          | <span>°C</span>
        </span>
      </div>
      </div>
    );
  }
}
