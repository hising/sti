import React, { useState } from "react";

export const Item = ({ name, id, onClick, onUpdate }) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const [val, setVal] = useState(name);
    let updateForm = (
        <input
            type={"text"}
            value={val}
            onChange={(event) => {
                event.preventDefault();
                setVal(event.target.value);
            }}
        />
    ); // TODO: Change Input.jsx to be able to handle both Add and Update
    return (
        <li key={`list-item-${id}`}>
            {isUpdate ? updateForm : name}{" "}
            <a
                onClick={(event) => {
                    event.preventDefault();
                    onClick(id);
                }}
                href={"#"}>
                Delete
            </a>{" "}
            <a
                onClick={(event) => {
                    event.preventDefault();
                    if (isUpdate && val !== name) {
                        onUpdate(id, val);
                    }
                    setIsUpdate(!isUpdate);
                }}
                href={"#"}>
                {isUpdate ? "Save" : "Update"}
            </a>
        </li>
    );
};
