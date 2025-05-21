import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [pageLoad, setPageLoad] = useState(true);
  const [city, setCity] = useState(null);
  const [responseData, setResponseData] = useState("");

  function handleWeatherApiResponse(response) {
    console.log(response.data);
    setResponseData({
      cityName: response.data.city,
      temp: Math.round(response.data.temperature.current),
      condition: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      tempFeel: Math.round(response.data.temperature.feels_like),
      wind: Math.round(response.data.wind.speed),
    });

    setPageLoad(true);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "143af7fd5b08cab06a8bf5bo4f3btde9";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleWeatherApiResponse);
  }

  if (pageLoad) {
    return (
      <div className="Weather">
        <div className="container">
          <form className="SearchMain" onSubmit={handleSubmit}>
            <input
              className="SearchBox"
              type="text"
              placeholder="Enter City name here..."
              autoFocus="on"
              onChange={updateCity}
            />
            <input className="SearchButton" type="submit" value="Search" />
          </form>
          <div className="row WeatherMain">
            <div className="row">
              <div className="col text-start">
                <ul>
                  <li className="WeatherCity">{responseData.cityName}</li>
                  <li className="WeatherTime">Wednesday 15:10</li>
                  <li className="WeatherCondition">{responseData.condition}</li>
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
              <span className="WeatherTempNo">{responseData.temp}</span>
              <span className="WeatherMetric">°C | °F</span>
            </div>
            <div className="col-6 text-start WeatherData">
              <ul>
                <li>Feel's like: {responseData.tempFeel}°C</li>
                <li>Humidity: {responseData.humidity}%</li>
                <li>Wind: {responseData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
}
