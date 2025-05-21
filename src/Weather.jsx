import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form className="SearchMain">
          <input
            className="SearchBox"
            type="text"
            placeholder="Enter City name here..."
            autoFocus="on"
          />
          <input className="SearchButton" type="submit" value="Search" />
        </form>
        <div className="row WeatherMain">
          <div className="row">
            <div className="col text-start">
              <ul>
                <li className="WeatherCity">Sydney</li>
                <li className="WeatherTime">Wednesday 15:10</li>
                <li className="WeatherCondition">Light rain</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row WeatherMainSecondary">
          <div className="col-3 WeatherIcon">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
              alt="Cloud Rain"
            />
          </div>
          <div className="col-3 WeatherTemp">
            <span className="WeatherTempNo">19</span>
            <span className="WeatherMetric">°C | °F</span>
          </div>
          <div className="col-6 text-start WeatherData">
            <ul>
              <li>Precipitation: 25%</li>
              <li>Humidity: 70%</li>
              <li>Wind: 10 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
