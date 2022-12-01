import { Vehicle } from "./Vehicle";

export class Truck extends Vehicle {
    cargoType:string;
    capacity:number;

    constructor(id:string, 
        make:string, 
        model:string, 
        rentalPrice:number, 
        rentedTo:string | null, 
        cargoType: string, 
        capacity:number) {

super(id, make, model, rentalPrice, rentedTo)
this.id = id;
this.make = make;
this.model = model,
this.rentalPrice = rentalPrice;
this.rentedTo = rentedTo;
this.cargoType = cargoType;
this.capacity = capacity;}
}