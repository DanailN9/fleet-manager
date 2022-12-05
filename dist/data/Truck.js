import { Vehicle } from "./Vehicle";
export class Truck extends Vehicle {
    cargoType;
    capacity;
    constructor(id, make, model, rentalPrice, rentedTo, cargoType, capacity) {
        super(id, make, model, rentalPrice, rentedTo);
        this.id = id;
        this.make = make;
        this.model = model,
            this.rentalPrice = rentalPrice;
        this.rentedTo = rentedTo;
        this.cargoType = cargoType;
        this.capacity = capacity;
    }
}
//# sourceMappingURL=Truck.js.map