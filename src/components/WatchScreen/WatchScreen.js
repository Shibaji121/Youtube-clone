import React from "react";
import { useSearchParams } from "react-router-dom";

const WatchScreen = () => {
  const [params] = useSearchParams();
  console.log(params.get("v"));
  return (
    <div>
      <h1>Watch Screen</h1>
    </div>
  );
};

export default WatchScreen;
