import React from "react";
import { useWeatherAPPContext } from "../../Context/Context";

const HUMIDITYComponent = () => {
  let {
    state: { current, city }
  } = useWeatherAPPContext();

  //console.log(current, city);

  return (
    <React.Fragment>
      {current ? (
        <div className="humidityWrap">
          <div className="humidityData">
            <div className="title">Weather Description</div>
            <div className="value">{current.weather[0].description}</div>
          </div>
          <div className="humidityData">
            <div className="title">Humidity</div>
            <div className="value">{current.main.humidity} %</div>
          </div>
          <div className="humidityData">
            <div className="title">Wind</div>
            <div className="value">{Math.round(current.wind.speed)} km/h</div>
          </div>
          <div className="humidityData">
            <div className="title">{city.city} - Population</div>
            <div className="value">
              {parseFloat(city.population).toLocaleString("en")}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};
export default HUMIDITYComponent;
