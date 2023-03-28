import React, { useState } from 'react';
import '../App.css';
import { Button, Dropdown, Form } from 'react-bootstrap';
import List from './list';
interface Menu {
    name: string;
    fields: string[];
}
const FinalMenu: React.FC = () => {
    var Filter: any = {
        Date: Date,
        type: String,
        Status: String,
        Amount: Number

    }
    var data: any;
    const [selected, setSelected] = useState<any>([])
    const [view, setView] = useState<boolean>(true)
    var index = 0

    const inputhandler = (e: any) => {
        const name: any = e.target.name
        const value: any = e.target.value
        setSelected((pre: any) => ({ ...pre, [name]: name }));
        setView(false);
        // const keys = Object.keys(Filter);
        // const lastKey = keys[keys.length - 1];
        // delete Filter[lastKey];
        // let i: number = 0
        // data = Object.keys(Filter).map((item, index) => {
        //     if (item != name) {
        //         i++
        //         data[i] = item
        //     }    

        // })
        // Filter = data;
        console.log("Filter", data)

    }


    const subtract = () => {
        // let arr: Array<string> = []
        // arr = selected;
        const keys = Object.keys(selected);
        const lastKey = keys[keys.length - 1];
        delete selected[lastKey];
        setSelected((pre: any) => ({ ...pre, [index]: index++ }));
        // Object.keys(arr).pop();
        // console.log("array", arr)
        console.log("selected", selected.index)

    }


    const Addition = () => {
        setView(true)

    }
    // console.log("selected", selected)
    //const [currentMenu, setCurrentMenu] = useState<any>(FinalMenu)
    return (
        <>
            <div style={{ display: "flex" }}>
                {view ? <Dropdown  >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {
                            Object.keys(Filter).map((item, index) => {
                                return (
                                    <Dropdown.Item key={index} href="#/action-1" onClick={inputhandler} name={item}>{Object.keys(selected).includes(item) ? null : item}</Dropdown.Item>
                                )
                            })
                        }
                    </Dropdown.Menu>
                </Dropdown> : null}
                {selected ? (
                    <List key={index} selected={selected} Filter={Filter} />
                ) : (
                    null
                )}

                <Button onClick={Addition} >+</Button>
                <Button onClick={subtract}>-</Button>
            </div>
        </>
    );
};

export default FinalMenu;