import React, { useEffect } from "react";
import cities from "../../Data/in.json";
import { useWeatherAPPContext } from "../../Context/Context";
import axios from "axios";
const ChooseStateComponents = () => {
  //console.log("HI", useWeatherAPPContext());

  const {
    state: { city },
    dispatch
  } = useWeatherAPPContext();

  const handleChange = (e) => {
    const selectedCity = cities.filter((city) => {
      return city.city === e.target.value;
    })[0];
    dispatch({
      type: "SET_CITY",
      payload: selectedCity
    });
    //console.log(selectedCity);
  };
  //api call
  const APIKEY = "2044142bdce139671dfdf447c6c81b8d";
  let lat = city && city.lat ? city.lat : "";
  let long = city && city.lng ? city.lng : "";
  let exclude = "hourly,minutely";
  //const URLDaily = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&cnt=7&appid=${APIKEY}`;
  const URLDaily = `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=en&appid=${APIKEY}`;

  const fetchData = () => {
    axios(URLDaily).then((data) => {
      //console.log(data);
      const weatherForecast = data.data.list;
      let _daily = [];
      for (var i = 0; i < weatherForecast.length; i += 8) {
        _daily.push(weatherForecast[i]);
      }
      //console.log(_daily);
      //let _daily = data.data.list;
      dispatch({
        type: "SET_DAILY",
        payload: _daily
      });
    });
  };
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, [city]);
  return (
    <React.Fragment>
      <div className="stateWrap">
        <select
          className="stateMenu"
          defaultValue={city}
          onChange={handleChange}
        >
          {cities &&
            cities.length > 0 &&
            cities.map((city) => {
              return (
                <option key={`${city.population}${city.lat}`} value={city.city}>
                  {city.city} - {city.admin_name}
                </option>
              );
            })}
        </select>
      </div>
    </React.Fragment>
  );
};
export default ChooseStateComponents;
