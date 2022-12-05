import { Vehicle } from "./Vehicle";
export class Car extends Vehicle {
    bodyType;
    numberOfSeats;
    transmission;
    constructor(id, make, model, rentalPrice, rentedTo, bodyType, numberOfSeats, transmission) {
        super(id, make, model, rentalPrice, rentedTo);
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
//# sourceMappingURL=Car.js.map