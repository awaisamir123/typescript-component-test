import React from "react";
import { Dropdown } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";

const MultipleSelection = ({
  setSelectedMultipleValue,
  selectedMultipleValue,
}: any) => {
  type Option = {
    label: string;
    value: string;
  };

  const options: Option[] = [
    { label: "Grapes", value: "grapes" },
    { label: "Mango", value: "mango" },
    { label: "Strawberry", value: "strawberry" },
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
            id="dropdown-basic"
            className="form-control"
          >
            Type
          </Dropdown.Toggle>
        </Dropdown>

        <MultiSelect
          options={options}
          value={selectedMultipleValue}
          onChange={setSelectedMultipleValue}
          labelledBy="Select"
        />
      </div>
    </div>
  );
};

export default MultipleSelection;
