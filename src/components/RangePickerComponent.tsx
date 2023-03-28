import React from "react";
import { Dropdown } from "react-bootstrap";

const RangePickerComponent = () => {
  return (
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
          Amount
        </Dropdown.Toggle>
      </Dropdown>

      <input type="number" placeholder="From" className="form-control" />
      <input type="number" placeholder="To" className="form-control" />
    </div>
  );
};

export default RangePickerComponent;
