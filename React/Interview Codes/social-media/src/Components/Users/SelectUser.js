import React from "react";
import Select from "react-select";
function SelectUser({ options, onChangeHandler, name, placeholder, value }) {
  return (
    <Select
      value={value}
      onChange={(e) => onChangeHandler(e, name)}
      options={options}
      className="task-category dropdown"
      classNamePrefix="react-select-dropdown"
      placeholder={placeholder}
    />
  );
}

export default SelectUser;
