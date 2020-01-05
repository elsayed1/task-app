import React, { Component } from "react";
import MenuItem from "./MenuItem";

import "./sidemenu.css";
export class SideMenu extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="side-menu">
        <h1>coligo</h1>
        <MenuItem text="Dashboard" icon="fa fa-home fa-fw"></MenuItem>
        <MenuItem text="Schedule" icon="fa fa-calendar fa-fw"></MenuItem>
        <MenuItem text="Courses" icon="fa fa-book fa-fw"></MenuItem>
        <MenuItem text="Gradebook" icon="fa fa-graduation-cap fa-fw"></MenuItem>
        <MenuItem text="Performance" icon="fa fa-tachometer fa-fw"></MenuItem>
        <MenuItem text="Announcement" icon="fa fa-bullhorn fa-fw"></MenuItem>
      </div>
    );
  }
}

export default SideMenu;
