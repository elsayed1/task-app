import React from "react";

const Frame = ({ header, subhead, rightval, children, styl }) => {
  return (
    <div className="frame">
      <div className="head">
        <div>
          <h3>{header}</h3>
          <p>{subhead}</p>
        </div>
        <h4>{rightval}</h4>
      </div>
      {children}

    </div>
  );
};

export default Frame;
