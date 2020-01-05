import React, { Component } from "react";
import Frame from "../common/Frame";
import Comment from "./Comment";
import "./announcement.css";
import { connect } from "react-redux";
import { getFakeAnnouncements } from "../../actions/actions";

export class Announcements extends Component {
  componentDidMount() {
    this.props.getFakeAnnouncements();
  }

  render() {
    const { announcements } = this.props.announcement;
    if (!Object.keys(announcements).length) return <div></div>;

    return (
      <div className="announcements">
        <Frame
          header="Announcements"
          subhead="We educate warriors keep updated :]"
          rightval="All"
        >
          {announcements.map(item => (
            <Comment
              key={item.name}
              name={item.name}
              subject={item.subject}
              comment={item.comment}
              image={item.img}
            />
          ))}
        </Frame>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    announcement: state.announcements
  };
};
export default connect(mapStateToProps, { getFakeAnnouncements })(
  Announcements
);
