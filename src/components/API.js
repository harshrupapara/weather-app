import React, { useState, useEffect } from "react";
import axios from "axios";
import { Widget } from "./Widget";
import { BiCurrentLocation } from "react-icons/bi";

export const API = (prop) => {
  let [inputValue, setInputValue] = useState("Jamnagar, India");
  let [addressVal, setAddress] = useState("");
  let [conditionsVal, setConditons] = useState("");
  let [temperatureValC, setTempC] = useState("");
  let [temperatureValF, setTempF] = useState("");

  const options = {
    method: "GET",
    url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
    params: {
      aggregateHours: "24",
      location: `${inputValue}`,
      contentType: "json",
      unitGroup: "uk",
      shortColumnNames: "0",
    },
    headers: {
      "X-RapidAPI-Key": "7cd1488b43msh82ff903678f236fp114744jsn88d7c14ddecf",
      "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
    },
  };

  const getWeatherDetails = async () => {
    const res = await axios.request(options);
    setTempC(res.data.locations[inputValue].values[0].temp);
    setConditons(res.data.locations[inputValue].values[0].conditions);
    setAddress(res.data.locations[inputValue].address);
    setTempF(temperatureValC * 1.8 + 32);
  };
  useEffect(() => {
    getWeatherDetails();
  }, []);

  useEffect(() => {
    prop.stateLifter(conditionsVal);
  }, [getWeatherDetails]);

  return (
    <div>
      <div className="flex flex-col gap-8 items-center">
        <div className="flex justify-center items-center gap-6">
          <div className="relative flex w-full items-center">
            <span className="z-10 leading-snug font-normal absolute items-center text-center text-slate-300 absolute  rounded text-base items-center justify-center w-8 pl-3 py-3">
              <BiCurrentLocation className="text-blue-300" />
            </span>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              placeholder="Enter Location"
              className="fnt-med px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-stone-100 rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full pl-10"
            />
          </div>
          <div>
            <button
              className="bg-blue-300 text-sm px-3 py-1 rounded fnt-med text-stone-100"
              onClick={getWeatherDetails}>
              Locate
            </button>
          </div>
        </div>
        <div>
          <Widget
            className="fixed"
            addressVal={addressVal}
            conditionsVal={conditionsVal}
            temperatureValC={temperatureValC}
            temperatureValF={temperatureValF}
          />
        </div>
      </div>
    </div>
  );
};
