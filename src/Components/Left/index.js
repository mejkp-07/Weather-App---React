import React from "react";
import { useWeatherAPPContext } from "../../Context/Context";
import dayjs from "dayjs";

const LeftComponents = () => {
  const {
    state: { city, current }
  } = useWeatherAPPContext();
  //console.log(current);
  const WEEKDAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  if (!current) return <div>Loading...</div>;
  const weekdayindex = dayjs.unix(current.dt).day();
  return (
    <React.Fragment>
      <div className="leftWrap">
        <div className="dateWrap">
          <h2>{WEEKDAYS[weekdayindex]}</h2>
          <span className="dateday">
            {dayjs.unix(current.dt).format("DD MMM YYYY")}
          </span>
          <span className="locationName">
            {city.city} - {city.admin_name} - {city.country}
          </span>
        </div>
        <div className="weatherContainer">
          <img
            alt="BigWeatherImg"
            className="weathericon"
            src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
          />
          <h1 className="weatherTemp">
            {Math.round(current.main.temp)} <sup>o</sup>C
          </h1>
          <h3 className="weatherDesc">{current.weather[0].description}</h3>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LeftComponents;
