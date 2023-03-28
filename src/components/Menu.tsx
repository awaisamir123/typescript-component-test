import React, { useState } from "react";
import "../App.css";
import { Dropdown } from "react-bootstrap";
import List from "./List";
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr";

const Menu = () => {
  let Filter = {
    Date: Date,
    type: String,
    Status: String,
    Amount: Number,
  };
  const [selected, setSelected] = useState<any>([]);
  const [view, setView] = useState<boolean>(true);

  let index = 0;
  const inputhandler = (e: any) => {
    const name: string = e.target.name;
    setSelected((pre: string[]) => ({ ...pre, [name]: name }));
    setView(false);
  };

  const subtraction = () => {
    const keys = Object.keys(selected);
    const lastKey: any = keys[keys.length - 1];
    delete selected[lastKey];
    setSelected((pre: any) => ({ ...pre, [index]: index++ }));
  };

  const addition = () => {
    setView(true);
  };

  let array1: string | string[] = [];
  let array2: string | string[] = [];
  array1 = Object.keys(Filter);
  array2 = Object.keys(selected);

  return (
    <>
      <div className="container-fluid m-5">
        <div style={{ display: "flex" }}>
          {selected ? <List key={index} selected={selected} /> : null}
          {view ? (
            <>
              <Dropdown className="ml-auto" style={{marginTop:"10px"}}>
                <Dropdown.Toggle variant="none" className="border" id="dropdown-basic">
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
            </>
          ) : null}
          <div
            style={{ marginTop: "20px", display: "flex", marginLeft: "50px" }}
          >
            {array1.every((elem) => array2.includes(elem)) ? null : (
              <GrAddCircle
                onClick={addition}
                data-testid={"add-icon"}
                style={{ width: "20px", height: "20px" }}
              ></GrAddCircle>
            )}
            <GrSubtractCircle
              onClick={subtraction}
              data-testid={"delete-icon"}
              style={{ width: "20px", height: "20px" }}
            ></GrSubtractCircle>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
