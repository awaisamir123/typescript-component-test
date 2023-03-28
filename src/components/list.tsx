import React, { useState } from "react";
import "../App.css";
import { Dropdown } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
type Option = {
  label: string;
  value: string;
};

type ListItem = "type" | "Status" | "Amount" | "Date";

type Selected = Record<ListItem, boolean>;

type ListProps = {
  selected: Selected;
};

const options2: Option[] = [
  { label: "Residential", value: "1" },
  { label: "Real Estate", value: "2" },
  { label: "Compliance Review", value: "3" },
];

const options: Option[] = [
  { label: "Grapes", value: "grapes" },
  { label: "Mango", value: "mango" },
  { label: "Strawberry", value: "strawberry" },
];

const List: React.FC<ListProps> = ({ selected }) => {
  const [selectedValue, setSelectedValue] = useState<any>([]);
  return (
    <div style={{ display: "flex" }}>
      {Object.keys(selected)?.map((item: string, index: number) => {
        if (item === "type") {
          return (
            <div
              key={index}
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
                value={selectedValue}
                onChange={setSelectedValue}
                labelledBy="Select"
              />
            </div>
          );
        } else if (item === "Status") {
          return (
            <div
              key={index}
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
                {options2.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          );
        } else if (item === "Amount") {
          return (
            <div
              key={index}
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

              <input
                type="number"
                placeholder="From"
                className="form-control"
              />
              <input type="number" placeholder="To" className="form-control" />
            </div>
          );
        } else if (item === "Date") {
          return (
            <div
              key={index}
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
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default List;
