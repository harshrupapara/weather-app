import React, { useEffect } from "react";

export const Test = () => {
  const url = "http://scplayground.com/api/promojson";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => console.log(responseData))
      .catch((error) => console.error(error));
  }, []);
  return <div>Test</div>;
};
