import React from "react";
import "./exams.css";
const Exams = () => {
  return (
    <section className="exams">
      <div className="content">
        <h1>EXAMS TIME</h1>
        <p>
          Here we are, Are you ready to fight? Don't worry, we prepared some
          tips to be ready for your exams
        </p>
        <div className="quote">
          <q>Nothing happens until something move</q>
          <span>- Albert Einstein</span>
        </div>
        <button>View exams tips</button>
      </div>
      <div className="image"></div>
    </section>
  );
};

export default Exams;
