import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };


return (
  <div className="container">
    <h1>{count}</h1>
    <button className="btn btn-primary" onClick={handleClick}>Increment</button>
  </div>
);
}

export default Counter;
