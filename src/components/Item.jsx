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
    );
    return (
        <li key={`list-item-${id}`}>
            {isUpdate ? updateForm : name}{" "}
            <a
                onClick={(event) => {
                    event.preventDefault();
                    onClick(id);
                }}
                href={"#"}
            >
                Delete
            </a>{" "}
            <a
                onClick={(event) => {
                    event.preventDefault();
                    setIsUpdate(!isUpdate);
                }}
                href={"#"}
            >{isUpdate ? "Save" : "Update"}</a>
        </li>
    );
};
