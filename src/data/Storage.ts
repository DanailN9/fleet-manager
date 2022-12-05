import { generateId } from "./util";

export type TapeId = string;

export interface Tape {
    id: string
}

export interface Storage {
    getAll(collectionName: string): Promise<Tape[]>;
    getById(collectionName: string, id: TapeId): Promise<Tape>;
    create(collectionName: string, data: any): Promise<Tape>;
    update(collectionName: string, id: TapeId, data: any): Promise<Tape>;
    delete(collectionName: string, id: TapeId): Promise<void>;
}

export class LocalStorage implements Storage {
    async getAll(collectionName: string): Promise<Tape[]> {
        return JSON.parse(localStorage.getItem(collectionName) || null) || [];
    }
    async getById(collectionName: string, id: string): Promise<Tape> {
        const items = await this.getAll(collectionName);
        const result = items.find(i => i.id == id);
        return result;
    }
    async create(collectionName: string, data: any): Promise<Tape> {
        const items = await this.getAll(collectionName);
        const record = Object.assign({}, data, { id: generateId()});
        items.push(record);
        localStorage.setItem(collectionName, JSON.stringify(items));

        return record;
    }
    async update(collectionName: string, id: string, data: any): Promise<Tape> {
        const items = await this.getAll(collectionName);
        const index = items.findIndex(i => i.id == id);
        if (index == -1) {
            throw new ReferenceError(`Record ${id} not found in "${collectionName}"`);  
        }
        const record = Object.assign({}, data, { id });
        items[index] = record;
        localStorage.setItem(collectionName, JSON.stringify(items));

        return record;
    }
    async delete(collectionName: string, id: string): Promise<void> {
        const items = await this.getAll(collectionName);
        const index = items.findIndex(i => i.id == id);
        if (index == -1) {
            throw new ReferenceError(`Record ${id} not found in "${collectionName}"`);  
        }
        items.splice(index, 1);
        localStorage.setItem(collectionName, JSON.stringify(items))
    }
    
}