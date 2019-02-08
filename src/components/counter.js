import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <div>{`Count: ${count}`}</div>
      <button
        onClick={() => {
          console.log("new count = ", count + 1);
          setCount(count + 1);
        }}
      >
        <span role="img" aria-label="so cool">
          +1
        </span>
      </button>
    </React.Fragment>
  );
};
