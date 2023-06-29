import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Another from "./Another";    

const Lifecylcle = () => {
  const [count, setCount] = useState(0);
  const [anotherState, setAnotherState] = useState(false);

  useEffect(() => {
    console.log("componentDidMount");
  }, [count]);

  return (
    <div className="m-3">
      <div >
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Click me</button>
      </div>

      <div className="text-secondary display-5">{count}</div>

      <div >
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Set Another State</button>
      </div>
      <Another />
    </div>
  );
};

export default Lifecylcle;
