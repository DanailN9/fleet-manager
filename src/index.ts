import { LocalStorage } from "./data/Storage";

console.log('index');


async function start() {
    const storage = new LocalStorage();

    console.log(await storage.getAll('cars'));

    const carData = {
        make: 'vw',
        model: 'Golf 2 '
    }

    const car = await storage.update('car', '9624-dd0f', carData);
    //console.log(car)
}

start()