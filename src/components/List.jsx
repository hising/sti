import React from "react";
import { Item } from "./Item";
export const List = ({ items, onRemove, onUpdate, loading = false }) => {
    return items.length > 0 ? (
        <ul>
            {items.map((item) => (
                <Item key={item.id} onUpdate={onUpdate} onClick={onRemove} {...item} />
            ))}
        </ul>
    ) : loading ? (
        <div>Loading ...</div>
    ) : (
        <div>Wow, so empty!</div>
    );
};
