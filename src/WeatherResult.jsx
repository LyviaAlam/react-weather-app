import React from "react";
import DisplayDate from "./DisplayDate";
import ConvertTemp from "./TempConvert";

export default function WeatherResult(props) {
  return (
    <div className="WeatherResult">
      <div className="row WeatherMain">
        <div className="row">
          <div className="col text-start">
            <ul>
              <li className="WeatherCity">{props.data.cityName}</li>
              <li className="WeatherTime">
                <DisplayDate date={props.data.date} />
              </li>
              <li className="WeatherCondition text-capitalize">
                {props.data.condition}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row WeatherMainSecondary">
        <div className="col-3 WeatherIcon">
          <img src={props.data.weatherIcon} alt={props.data.weatherIconAlt} />
        </div>
        <div className="col-4 WeatherTemp">
          <ConvertTemp celsius={props.data.temp} />
        </div>
        <div className="col-5 text-start WeatherData">
          <ul>
            <li>Feel's like: {props.data.tempFeel}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
