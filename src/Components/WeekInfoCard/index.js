import React, { useEffect, useState } from "react";
import { useWeatherAPPContext } from "../../Context/Context";
import SingleCardComponents from "../SingleCard";

const WeekInfoCardComponents = () => {
  const {
    state: { daily },
    dispatch
  } = useWeatherAPPContext();
  const [selectedCard, setSelectedCard] = useState(0);

  //console.log(daily);
  const updateCurrent = () => {
    return dispatch({
      type: "SET_CURRENT",
      payload: daily[selectedCard]
    });
  };
  useEffect(() => {
    updateCurrent();
    //eslint-disable-next-line
  }, [daily, selectedCard]);
  return (
    <React.Fragment>
      <div className="cardWrap">
        <ul className="cardList">
          {daily && daily.length > 0
            ? daily.map((item, index) => {
                return (
                  <SingleCardComponents
                    key={index}
                    item={item}
                    className={index === selectedCard ? "active" : ""}
                    onClick={() => {
                      setSelectedCard(index);
                      updateCurrent();
                    }}
                  />
                );
              })
            : ""}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default WeekInfoCardComponents;
