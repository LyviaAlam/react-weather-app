import React from "react";

export default function WeatherForecast() {
  return (
    <div>
      <div className="row">
        <div className="col WeatherForecastMain">
          <div className="WeatherForecastDay">Mon</div>
          <div className="WeatherForecastIcon">Icon</div>
          <div className="WeatherForecastTemp">
            <span className="WeatherForecastMaxTemp">12°</span>
            {" | "}
            <span className="WeatherForecastMinTemp">18°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
