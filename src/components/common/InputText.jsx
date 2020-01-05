import React from "react";
import PropTypes from "prop-types";

function InputText({
  type,
  name,
  value,
  onChange,
  placeholder,
  icon,
  disabled
}) {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i class={icon}></i>
        </span>
      </div>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        disabled={disabled}
      />
    </div>
  );
}
InputText.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};
InputText.defaultProps = {
  type: "text"
};
export default InputText;
