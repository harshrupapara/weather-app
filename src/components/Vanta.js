import React, { useState, useEffect, useRef } from "react";
import { API } from "./API";
import * as THREE from "three";
import CLOUD from "vanta/dist/vanta.clouds.min.js";
import CLOUD2 from "vanta/dist/vanta.clouds2.min.js";

export const Vanta = () => {
  const [conditionsValue, setConditonsValue] = useState("Clear");
  const stateLifter = (conditons) => {
    setConditonsValue(conditons);
  };
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  console.log("lift:", conditionsValue);

  useEffect(() => {
    if (conditionsValue === "Clear") {
      setVantaEffect(
        CLOUD({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 1000.0,
          speed: 1.2,
        })
      );
    } else if (conditionsValue === "Partially cloudy") {
      setVantaEffect(
        CLOUD({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 1000.0,
          speed: 1.2,
          skyColor: 0x58afcf,
          sunColor: 0xe8e8e8,
          sunGlareColor: 0x515144,
          sunlightColor: 0x603838,
        })
      );
    } else {
      console.log("Data not found:", conditionsValue);
    }
  }, [vantaEffect, conditionsValue]);
  console.log(vantaEffect);
  return (
    <div>
      <div ref={vantaRef} className="h-screen flex items-center justify-center">
        <API className="z-10" stateLifter={stateLifter} />
      </div>
    </div>
  );
};
