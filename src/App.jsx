import React, { Component } from "react";
import SideMenu from "./components/sideMenu/SideMenu";
import "./index.css";
import Navbar from "./components/navBar/Navbar";
import Exams from "./components/exams/Exams";
import Announcements from "./components/announcements/Announcements";
import Quiz from "./components/quiz/Quiz";
import store from "../src/store";

import { Provider } from "react-redux";

export default class App extends Component {
  static propTypes = {};

  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <SideMenu />
          <div className="content">
            <Navbar />
            <Exams />
            <div className="frames">
              <Announcements />
              <Quiz />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
