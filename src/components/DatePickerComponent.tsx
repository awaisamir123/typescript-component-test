import React from "react";
import { Dropdown } from "react-bootstrap";

const DatePickerComponent = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          margin: "10px",
        }}
      >
        <Dropdown>
          <Dropdown.Toggle
            variant="none"
            className="form-control"
            id="dropdown-basic"
          >
            Date
          </Dropdown.Toggle>
        </Dropdown>

        <input type="date" className="form-control" />
        <input type="date" className="form-control" />
      </div>
    </div>
  );
};

export default DatePickerComponent;
