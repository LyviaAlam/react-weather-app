import React from "react";

export default function DisplayDate(props) {
  const timestamp = new Date(props.date * 1000);

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
  let hour = timestamp.getHours();
  let minute = timestamp.getMinutes();
  return (
    <div>
      {day} {hour}:{minute}
    </div>
  );
}
