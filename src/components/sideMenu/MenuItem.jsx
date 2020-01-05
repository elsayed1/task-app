import React from "react";
import PropTypes from "prop-types";

const MenuItem = ({ text, icon }) => {
  return (
    <div className="menu-item">
      <i className={`${icon} menu-icons`} />
      <span>{text}</span>
    </div>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string
};

export default MenuItem;
