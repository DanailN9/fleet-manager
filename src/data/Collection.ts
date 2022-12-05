import { Storage, Tape, TapeId } from "./Storage";

export class Collection {
    constructor(
        private storage: Storage,
        private name: string,
        ){};

        getAll(): Promise<Tape[]> {
            return this.storage.getAll(this.name);
        };
        getById(id: TapeId): Promise<Tape> {
            return this.storage.getById(this.name, id);
        };
        create(data: any): Promise<Tape>{
            return this.storage.create(this.name, data);
        };
        update(id: TapeId, data: any): Promise<Tape>{
            return this.storage.update(this.name, id, data);
        };
        delete(id: TapeId): Promise<void>{
            return this.storage.delete(this.name, id);
        };
}