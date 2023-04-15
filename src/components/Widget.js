import React from "react";
import "../styles/styles.css";
import Logo from "../assets/cloudy.png";

export const Widget = (props) => {
  return (
    <div className="card__daytime rounded-lg">
      <div className="flex gap-8 px-20 py-10 items-center">
        <div className="flex flex-col gap-4">
          <p className="fnt-med text-white">{props.conditionsVal}</p>
          <img className="" src={Logo} />
        </div>
        <div className="bg-white w-1 h-32 rounded drop-shadow-lg"></div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="fnt-bld text-white text-2xl">{props.addressVal}</p>
            <p className="fnt-med text-white">Monday</p>
          </div>
          <div>
            <p className="fnt-bld text-white text-4xl">
              {props.temperatureValC}°
            </p>
            <p className="fnt-med text-white">{props.temperatureValF} F</p>
          </div>
        </div>
      </div>
    </div>
  );
};
