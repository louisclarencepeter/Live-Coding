import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Lifecylcle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  return (
    <div className="m-3">
      <div >
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Click me</button>
      </div>

      <div className="text-secondary display-5">{count}</div>
    </div>
  );
};

export default Lifecylcle;
