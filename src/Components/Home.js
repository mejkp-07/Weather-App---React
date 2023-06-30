import React from "react";
import ChooseStateComponents from "./ChooseState";
import HUMIDITYComponent from "./Humidity";
import WeekInfoCardComponents from "./WeekInfoCard";
import LeftComponents from "./Left";

const HomeComponents = () => {
  return (
    <React.Fragment>
      <div className="homeWrap">
        <div className="weatherSection">
          <LeftComponents />
          <div className="rightSide">
            <ChooseStateComponents />
            <WeekInfoCardComponents />
            <HUMIDITYComponent />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeComponents;
