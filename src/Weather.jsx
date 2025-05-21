import React, { useState } from "react";
import axios from "axios";
import WeatherResult from "./WeatherResult";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [responseData, setResponseData] = useState({ ready: false });

  function handleWeatherApiResponse(response) {
    setResponseData({
      ready: true,
      cityName: response.data.city,
      date: response.data.time,
      temp: Math.round(response.data.temperature.current),
      condition: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      tempFeel: Math.round(response.data.temperature.feels_like),
      wind: Math.round(response.data.wind.speed),
      weatherIcon: response.data.condition.icon_url,
      weatherIconAlt: response.data.condition.icon,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWeather();
  }

  function searchWeather() {
    const apiKey = "143af7fd5b08cab06a8bf5bo4f3btde9";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleWeatherApiResponse);
  }

  if (responseData.ready === true) {
    return (
      <div className="Weather">
        <div className="container">
          <form className="SearchMain" onSubmit={handleSubmit}>
            <div className="row">
              <div className="d-flex gap-2">
                <input
                  className="SearchBox form-control"
                  type="text"
                  placeholder="Enter City here..."
                  autoFocus="on"
                  onChange={updateCity}
                />

                <input
                  className="SearchButton btn btn-success"
                  type="submit"
                  value="Search"
                />
              </div>
            </div>
          </form>
          <WeatherResult data={responseData} />
        </div>
      </div>
    );
  } else {
    searchWeather();
    return "Loading app...";
  }
}
