import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDaily from "./WeatherForecastDaily";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState("");

  useEffect(() => {
    setReady(false);
  }, [props.data.cityName]);

  function handleWeatherApiForecastResponse(response) {
    setReady(true);
    setForecastData(response.data.daily);
  }
  function callForecastApi() {
    let city = props.data.cityName;
    const apiKey = "143af7fd5b08cab06a8bf5bo4f3btde9";
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleWeatherApiForecastResponse);
  }

  if (ready === true) {
    return (
      <div className="row">
        {forecastData.map(function (dayForecast, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDaily data={dayForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    callForecastApi();
    return null;
  }
}
