import React from "react";
import { Item } from "./Item";
import "./styles/List.css";
export const List = ({ items, onRemove, onUpdate, loading = false }) => {
    if (loading) {
        return <div>Loading ...</div>;
    }
    return items.length > 0 ? (
        <ul className={"sti-list"}>
            {items.map((item) => (
                <Item key={item.id} onUpdate={onUpdate} onClick={onRemove} {...item} />
            ))}
        </ul>
    ) : (
        <div className={"sti-empty-state"}>Wow, so empty! Add items in text input above</div>
    );
};
