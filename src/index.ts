import { Collection } from "./data/Collection";
import { LocalStorage } from "./data/Storage";

console.log('index');


async function start() {
    const storage = new LocalStorage();
    //const collection = new Collection(storage, 'cars')

    console.log(await storage.getAll('cars'));
    
    const carData = {
        make: 'vw',
        model: 'bmw'
    }
    
    const car = await storage.create('cars', carData);
    //console.log(car)

}

start()