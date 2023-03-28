import React, { useState } from 'react';
import '../App.css';
import { Button, Dropdown, Form, Col } from 'react-bootstrap';
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr"
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

const List: any = (selected: any, setSelected: any) => {
    const [field, setField] = useState<any>()
    return (
        Object.keys(selected.selected)?.map((item: string, index: number) => {

            if (item == "type") {
                return (
                    <div key={index} style={{ display: "flex", alignItems: "baseline" }} >
                        <Dropdown >
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Type
                            </Dropdown.Toggle>
                        </Dropdown >

                        <select multiple >
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div >)
            }
            else if (item == "Status") {
                return (
                    <div key={index} style={{ display: "flex", alignItems: "baseline" }}>

                        <Dropdown >
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Status
                            </Dropdown.Toggle>
                        </Dropdown >

                        <select multiple >
                            {options2.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>

                    </div >
                )
            }
            else if (item == "Amount") {
                return (<div key={index} style={{ display: "flex", alignItems: "baseline" }} >

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
                return (<div key={index} style={{ display: "flex", alignItems: "baseline" }}>

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