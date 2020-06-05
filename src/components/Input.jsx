import React, { useState } from "react";
export const Input = (props) => {

    const [txt, setTxt] = useState("");

    return (
        <div>
            <input type={"text"} value={txt} onChange={(event) => {
                setTxt(event.target.value);
            }}  />
            <button
                onClick={(event) => {
                    event.preventDefault();
                    if (txt.length > 0) {
                        props.onAdd(txt);
                        setTxt("");
                    }
                }}
            >
                Add
            </button>
        </div>
    );
};
