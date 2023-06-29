import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Infinite() {
  const [state, setState] = useState(true);

  useEffect(() => {
    setState(!state);
  }, 3000);
  return <div>{state && "Hello"}</div>;
}

export default Infinite;
