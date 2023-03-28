import React, { useState } from 'react';
import '../App.css';
import { Button, Dropdown, Form } from 'react-bootstrap';

const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
];

const List: any = (selected: any, Filter: any) => {
    console.log("selected childdddddddd", selected.selected)
    return (
        Object.keys(selected.selected).map((item: string, index: number) => {

            if (item == "type") {
                return (

                    <div style={{ display: "flex" }}>

                        <Dropdown >
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                type
                            </Dropdown.Toggle>
                        </Dropdown >

                        <select multiple >
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select></div >)
            }
            else if (item == "Status") {
                return (
                    <div>
                        <Dropdown >
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Status
                            </Dropdown.Toggle>
                        </Dropdown >

                        <select multiple >
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select></div >)
            }
            else if (item == "Amount") {
                return (<div>

                    <Dropdown >
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Amount
                        </Dropdown.Toggle>
                    </Dropdown >

                    <input
                        type="number"
                        placeholder="From"
                        value={0}
                    //onChange={(e) => onChange([e.target.value, value[1]])}
                    />
                    <input
                        type="number"
                        placeholder="To"
                        value={100}
                    //onChange={(e) => onChange([value[0], e.target.value])}
                    />
                </div>)
            }
            else if (item == "Date") {
                return (<div>

                    <Dropdown >
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Date
                        </Dropdown.Toggle>
                    </Dropdown >

                    <input
                        type="date"
                        value={Date.now()}
                    // onChange={(e) => onChange([e.target.value, Date.now()])}
                    />
                    <input
                        type="date"
                        value={Date.now()}
                    //onChange={(e) => onChange([Date.now(), e.target.value])}
                    />
                </div>)
            }
            else {
                return null;
            }
        })
    );
}

export default List;