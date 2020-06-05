import React, { useState } from "react";
import "./styles/Input.css";
export const Input = (props) => {
    const [txt, setTxt] = useState("");
    const [isFocus, setIsFocus] = useState(false);

    return (
        <div className={"sti-input" + (isFocus ? " focus" : "")}>
            <input
                type={"text"}
                value={txt}
                onChange={(event) => {
                    setTxt(event.target.value);
                }}
                placeholder={props.placeholder || ""}
                onFocus={() => {
                  setIsFocus(true)
                }}
                onBlur={() => {
                  setIsFocus(false);
                }}
            />
            <button
                onClick={(event) => {
                    event.preventDefault();
                    if (txt.length > 0) {
                        props.onAdd(txt);
                        setTxt("");
                    }
                }}>
                Add
            </button>
        </div>
    );
};
