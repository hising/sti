import React from "react";
export const List = ({ items, loading = false }) => {
    // TODO: Break out li elements as new Item-component
    return items.length > 0 ? (
        <ul>
            {items.map((item, index) => (
                <li key={`list-item-${item.id}`}>{item.name}</li>
            ))}
        </ul>
    ) : loading ? <div>Loading ...</div> : <div>Wow, so empty!</div>;
};
