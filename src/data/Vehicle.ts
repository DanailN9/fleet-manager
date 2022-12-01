export class Vehicle {
    id: string;
    make: string;
    model: string;
    rentalPrice: number;
    rentedTo: string | null;

    constructor(id:string, make: string, model:string, rentalPrice: number, rentedTo: string | null) {
        this.id = id;
        this.make = make;
        this.model = model;
        this.rentalPrice = rentalPrice;
        this.rentedTo = rentedTo;
    }
}