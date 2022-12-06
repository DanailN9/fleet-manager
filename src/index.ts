import { Collection } from "./data/Collection";
import { CarService } from "./data/Service";
import { LocalStorage } from "./data/Storage";

console.log('index');


async function start() {
    const storage = new LocalStorage();
    const collection = new Collection(storage, 'koli');
    const carsService = new CarService(collection);

    console.log(await carsService.getAll())

}

start()