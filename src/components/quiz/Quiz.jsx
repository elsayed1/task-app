import React, { Component } from "react";
import Frame from "../common/Frame";
import QuizBody from "./QuizBody";
import { connect } from "react-redux";
import { getFakeQuizzes } from "../../actions/actions";
import "./quiz.css";
class Quiz extends Component {
  componentDidMount() {
    this.props.getFakeQuizzes();
  }

  render() {
    const { quizzes } = this.props.quizzes;
    if (!Object.keys(quizzes).length) return <div></div>;
    return (
      <div>
        <Frame
          header="what's due"
          subhead='sometime"LATER"become "NEVER" go now'
          rightval="All"
        >
          {quizzes.map(item => (
            <QuizBody
              key={item.title}
              icon={
                item.type === "quiz" ? "fa fa-hourglass-half" : "fa fa-calendar"
              }
              course={item.course}
              title={item.title}
              topic={item.topic}
              duo={item.duo}
              btn={item.type === "quiz" ? "Start Quiz" : "Solve Assignment"}
            />
          ))}
        </Frame>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    quizzes: state.quizzes
  };
};
export default connect(mapStateToProps, { getFakeQuizzes })(Quiz);
