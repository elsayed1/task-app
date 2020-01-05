import React from "react";
import Button from "../common/Button";
const Data = ({ name, value }) => {
  return (
    <div className="data">
      <p>{name}</p>
      <p>{value}</p>
    </div>
  );
};
const QuizBody = ({ title, course, btn, icon, topic, duo }) => {
  return (
    <div className="quiz-body">
      <div className="quiz-head">
        <i className={icon}></i>
        <span>{title}</span>
      </div>
      <div className="">
        <Data name="Course:" value={course} />
        <Data name="Topic:" value={topic} />
        <Data name="Duo to:" value={duo} />
        <Button>{btn}</Button>
      </div>
    </div>
  );
};

export default QuizBody;
