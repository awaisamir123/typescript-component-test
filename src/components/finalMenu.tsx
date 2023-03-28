import React, { useState } from "react";
import "../App.css";
import { Dropdown } from "react-bootstrap";
import List from "./List";
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr";

const FinalMenu = () => {
  let Filter: any = {
    Date: Date,
    type: String,
    Status: String,
    Amount: Number,
  };
  const [selected, setSelected] = useState<any>([]);
  const [view, setView] = useState<boolean>(true);
  let index = 0;

  const inputhandler = (e: any) => {
    const name: any = e.target.name;
    const value: any = e.target.value;
    setSelected((pre: any) => ({ ...pre, [name]: name }));
    setView(false);
  };

  const subtract = () => {
    const keys = Object.keys(selected);
    const lastKey = keys[keys.length - 1];
    delete selected[lastKey];
    setSelected((pre: any) => ({ ...pre, [index]: index++ }));
  };

  const Addition = () => {
    setView(true);
  };

  return (
    <>
      <div className="container m-5">
        <div style={{ display: "flex" }}>
          {selected ? <List key={index} selected={selected} /> : null}
          {view ? (
            <Dropdown className="ml-auto">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select Filter
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {Object.keys(Filter).map((item, index) => {
                  return (
                    <Dropdown.Item
                      key={index}
                      onClick={inputhandler}
                      name={item}
                    >
                      {Object.keys(selected).includes(item) ? null : item}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          ) : null}
          <div
            style={{ marginTop: "0.4%", display: "flex", marginLeft: "50px" }}
          >
            <GrAddCircle
              onClick={Addition}
              data-testid={"add-icon"}
              style={{ width: "20px", height: "20px" }}
            ></GrAddCircle>
            <GrSubtractCircle
              onClick={subtract}
              data-testid={"delete-icon"}
              style={{ width: "20px", height: "20px" }}
            ></GrSubtractCircle>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalMenu;
