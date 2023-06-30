import React from "react";
import dayjs from "dayjs";
const SingleCardComponents = ({ item, className, onClick }) => {
  const WEEKDAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  //console.log(dayjs.unix(item.dt).$d)

  const weekdayindex = dayjs.unix(item.dt).day();

  return (
    <React.Fragment>
      <li key={item.dt} className={className} onClick={onClick}>
        <img
          alt="SmallWeatherImg"
          className="day-icon"
          src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        />
        <span className="day-name">{WEEKDAYS[weekdayindex].slice(0, 3)}</span>
        <span className="day-temp">
          {Math.round(item.main.temp)} <sup>o</sup>C
        </span>
      </li>
    </React.Fragment>
  );
};

export default SingleCardComponents;
