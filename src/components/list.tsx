import React, { useState } from "react";
import "../App.css";
import { Dropdown } from "react-bootstrap";
const options = [
  { label: "String", value: "1" },
  { label: "Number", value: "2" },
  { label: "Boolean", value: "3" },
];

const options2 = [
  { label: "Regidential ", value: "1" },
  { label: "Real Estate", value: "2" },
  { label: "Compliance Review ", value: "3" },
];

const List: any = (selected: any) => {
  return Object.keys(selected.selected)?.map((item: string, index: number) => {
    if (item == "type") {
      return (
        <div key={index} style={{ display: "flex", alignItems: "baseline" }}>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Type
            </Dropdown.Toggle>
          </Dropdown>

          <select multiple>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );
    } else if (item == "Status") {
      return (
        <div
          key={index}
          style={{ display: "flex", alignItems: "baseline", margin: "10px" }}
        >
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Status
            </Dropdown.Toggle>
          </Dropdown>

          <select multiple>
            {options2.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );
    } else if (item == "Amount") {
      return (
        <div
          key={index}
          style={{ display: "flex", alignItems: "baseline", margin: "10px" }}
        >
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Amount
            </Dropdown.Toggle>
          </Dropdown>

          <input type="number" placeholder="From" value={0} />
          <input type="number" placeholder="To" value={100} />
        </div>
      );
    } else if (item == "Date") {
      return (
        <div
          key={index}
          style={{ display: "flex", alignItems: "baseline", margin: "10px" }}
        >
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Date
            </Dropdown.Toggle>
          </Dropdown>

          <input type="date" value={Date.now()} />
          <input type="date" value={Date.now()} />
        </div>
      );
    } else {
      return null;
    }
  });
};

export default List;
