import { Car } from "./Car";
import { Collection } from "./Collection";
import { Tape, TapeId } from "./Storage";

export interface Service<T> {
    getAll(): Promise<T[]>;
    getById(id: TapeId): Promise<T>;
    create(data: any): Promise<T>;
    update(id: TapeId, data: any): Promise<T>;
    delete(id: TapeId): Promise<void>;

}

export class CarService implements Service<Car> {
    constructor(
        private collection: Collection,
    ){}

    async getAll(): Promise<Car[]> {
        const records = (await this.collection.getAll()).map(r => this.parseRecord(r));
        return records;
    }

    async getById(id: string): Promise<Car> {
        const record = await this.collection.getById(id);
        return this.parseRecord(record);
    }

    async create(data: any): Promise<Car> {
        this.validate(data);
        const record = await this.collection.create(data);
        return this.parseRecord(record);

    }

    async update(id: string, data: any): Promise<Car> {
        this.validate(data);
        const record = await this.collection.update(id, data);
        return this.parseRecord(record);
    }

    async delete(id: string): Promise<void> {
        return this.collection.delete(id);
    }

    private parseRecord(record: Tape): Car {
        const data = record as any;
        const result = new Car(
            data.id,
            data.make,
            data.model,
            data.bodyType,
            data.seats,
            data.transmission,
            data.rentalPrice,
            data.rentedTo
        )

        return result;
    }

    private validate(data: any): void {
        if (data.make != 'string') {
            throw new TypeError('Incompatible record. Invalid property "make"');
        }
        if (data.model != 'string') {
            throw new TypeError('Incompatible record. Invalid property "model"');
        }
        if (data.bodyType != 'string') {
            throw new TypeError('Incompatible record. Invalid property "bodyType"');
        }
        if (data.seats != 'number') {
            throw new TypeError('Incompatible record. Invalid property "seats"');
        }
        if (data.transmission != 'string') {
            throw new TypeError('Incompatible record. Invalid property "transmission"');
        }
        if (data.rentalPrice != 'number') {
            throw new TypeError('Incompatible record. Invalid property "rentalPrice"');
        }
        if (data.rentedTo != 'string' || data.rentedTo != null) {
            throw new TypeError('Incompatible record. Invalid property "rentalTo"');
        }
    }
    
}