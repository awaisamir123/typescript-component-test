import React, { useState } from 'react';
import '../App.css';

interface Menu {
    name: string;
    fields: string[];
}

const Menus: React.FC = () => {
    const [menus, setMenus] = useState<Menu[]>([]);
    const [newMenuName, setNewMenuName] = useState<string>('');
    const [newFieldName, setNewFieldName] = useState<string>('');

    const handleAddMenu = () => {
        if (newMenuName.trim() === '') return;

        const existingMenu = menus.find((menu) => menu.name === newMenuName);
        if (existingMenu) return;

        const newMenu = { name: newMenuName, fields: [] };
        setMenus([...menus, newMenu]);
        setNewMenuName('');
    };

    const handleAddField = (menuName: string) => {
        if (newFieldName.trim() === '') return;

        const menuIndex = menus.findIndex((menu) => menu.name === menuName);
        if (menuIndex < 0) return;

        const existingField = menus[menuIndex].fields.find(
            (field) => field === newFieldName
        );
        if (existingField) return;

        const newFields = [...menus[menuIndex].fields, newFieldName];
        const newMenus = [...menus];
        newMenus[menuIndex].fields = newFields;
        setMenus(newMenus);
        setNewFieldName('');
    };

    const handleDeleteMenu = (menuName: string) => {
        const newMenus = menus.filter((menu) => menu.name !== menuName);
        setMenus(newMenus);
    };

    const handleDeleteField = (menuName: string, fieldName: string) => {
        const menuIndex = menus.findIndex((menu) => menu.name === menuName);
        if (menuIndex < 0) return;

        const newFields = menus[menuIndex].fields.filter(
            (field) => field !== fieldName
        );
        const newMenus = [...menus];
        newMenus[menuIndex].fields = newFields;
        setMenus(newMenus);
    };

    return (
        <div className="App">
            <div className="MenuBar">
                {menus.map((menu) => (
                    <div key={menu.name} className="Menu">
                        <div className="MenuHeader">
                            <span>{menu.name}</span>
                            <button onClick={() => handleDeleteMenu(menu.name)}>X</button>
                        </div>
                        <div className="MenuFields">
                            {menu.fields.map((field) => (
                                <div key={field} className="MenuField">
                                    <span>{field}</span>
                                    <button
                                        onClick={() => handleDeleteField(menu.name, field)}
                                    >
                                        X
                                    </button>
                                </div>
                            ))}
                            <div className="AddField">
                                <input
                                    type="text"
                                    placeholder="New field name"
                                    value={newFieldName}
                                    onChange={(e) => setNewFieldName(e.target.value)}
                                />
                                <button onClick={() => handleAddField(menu.name)}>Add</button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="AddMenu">
                    <input
                        type="text"
                        placeholder="New menu name"
                        value={newMenuName}
                        onChange={(e) => setNewMenuName(e.target.value)}
                    />
                    <button onClick={handleAddMenu}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default Menus;