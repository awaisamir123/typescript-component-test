import React from "react";
import { Dropdown } from "react-bootstrap";

const SingleSelection = ({
  selectedSingleValue,
  setSelectedSingleValue,
}: any) => {
  type Option = {
    label: string;
    value: string;
  };

  const options: Option[] = [
    { label: "Residential", value: "1" },
    { label: "Real Estate", value: "2" },
    { label: "Compliance Review", value: "3" },
  ];

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
            Status
          </Dropdown.Toggle>
        </Dropdown>

        <select className="form-control">
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SingleSelection;
