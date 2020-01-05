import React, { memo, useRef } from "react";

export const Button = memo(({ countUp, label }) => {
  let count = useRef(0);
  console.log(count.current++);
  return (
    <button className="btn btn-primary" onClick={countUp}>
      {label}
    </button>
  );
});
