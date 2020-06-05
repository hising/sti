import React from "react";
import "./styles/app.css";
import { Input } from "./Input";
import { List } from "./List";
import { itemStore } from "../stores/ItemStore";
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.loadItemsFromServer().catch((e) => console.error(e));
    }

    // TODO: Handle remove item
    // TODO: Handle update item

    async addItem(txt) {
        await itemStore.create({name: txt});
        await this.loadItemsFromServer();
    }

    render() {
        return (
            <>
                <Input
                    onAdd={(txt) => {
                        this.addItem(txt);
                    }}
                />
                <List items={this.state.items} loading={this.state.loading} />
            </>
        );
    }

    async loadItemsFromServer() {
        let items = await itemStore.read();
        this.setState({
            items
        });
    }
}
