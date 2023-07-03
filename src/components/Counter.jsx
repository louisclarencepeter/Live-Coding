import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="m-2">{count}</div>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCount((count) => count + 1);
          console.log(`The count is now ${count}`);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
