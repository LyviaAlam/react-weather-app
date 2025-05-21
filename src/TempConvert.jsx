import React, { useState } from "react";

export default function ConvertTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function returnFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function returnCelcius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function convertToFahrenheit(celciusValue) {
    let fahrenheit = Math.round((celciusValue * 9) / 5 + 32);
    return `${fahrenheit}`;
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="WeatherTempNo">{props.celsius}</span>
        <span className="WeatherMetric">
          °C |{" "}
          <a href="" onClick={returnFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="WeatherTempNo">
          {convertToFahrenheit(props.celsius)}
        </span>
        <span className="WeatherMetric">
          <a href="" onClick={returnCelcius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
