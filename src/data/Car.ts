import { Vehicle } from "./Vehicle";



export class Car extends Vehicle {
    bodyType: string;
    numberOfSeats: number;
    transmission: string;

    constructor(id:string, 
                make:string, 
                model:string, 
                rentalPrice:number, 
                rentedTo:string | null, 
                bodyType: string, 
                numberOfSeats:number, 
                transmission: string) {

        super(id, make, model, rentalPrice, rentedTo)
        this.id = id;
        this.make = make;
        this.model = model,
        this.rentalPrice = rentalPrice;
        this.rentedTo = rentedTo;
        this.bodyType = bodyType;
        this.numberOfSeats = numberOfSeats;
        this.transmission = transmission;
    }
}