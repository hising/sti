import { HttpClient } from "../http/Client";

class ItemStore {
    constructor() {
        this.client = new HttpClient("https://yetric.se/api");
    }

    async create(item) {
        return await this.client.post("/sti/items", item);
    }

    async read(id = null) {
        // TODO: Check that id is an integer
        let path = id ? `/sti/items/${id}` : "/sti/items";
        return await this.client.get(path);
    }

    async update(id, item) {
        return await this.client.put(`/sti/items/${id}`, item);
    }

    async delete(id) {
        return await this.client.delete(`/sti/items/${id}`);
    }
}

export const itemStore = new ItemStore();
