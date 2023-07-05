import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((c) => c + 1);

    console.log(count);
  };

  console.log(count);

  return (
    <div className="m-3">
      <h1>{count}</h1>
      <button className="btn btn-promary" onClick={handleClick}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
