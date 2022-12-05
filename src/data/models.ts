import { Tape, TapeId } from "./Storage";

export class Cars implements Tape {
    constructor(
        public id: TapeId,
        public make: string,
        public model: string,
        public bodyType: string,
        public seats: number,
        public transmition: string,
        public rentalPrice: number
    )
}