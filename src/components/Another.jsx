import React from "react";
import { useEffect } from "react";

const Another = () => {
  useEffect(() => {
    console.log("componentDidMount");

    return () => {
        console.log("componentWillUnmount");
    };
  });

  return <div>Another</div>;
};

export default Another;
