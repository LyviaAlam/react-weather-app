import React from "react";

export default function WeatherForecastDaily(props) {
  const minTemp = Math.round(props.data.temperature.minimum);
  const maxTemp = Math.round(props.data.temperature.maximum);
  const iconUrl = props.data.condition.icon_url;
  const iconAlt = props.data.condition.icon;

  const timestamp = new Date(props.data.time * 1000);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[timestamp.getDay()];

  return (
    <div className="WeatherForecastMain">
      <div className="WeatherForecastDay">{day}</div>
      <div>
        <img className="WeatherForecastIcon" src={iconUrl} alt={iconAlt} />
      </div>
      <div className="WeatherForecastTemp">
        <span className="WeatherForecastMinTemp">{minTemp}°C</span>
        {" | "}
        <span className="WeatherForecastMaxTemp">{maxTemp}°C</span>
      </div>
    </div>
  );
}
