import { LocalStorage } from "./data/Storage";
console.log('index');
async function start() {
    const storage = new LocalStorage();
    const carData = {
        make: 'vw',
        model: 'Golf'
    };
    const car = await storage.create('car', carData);
    console.log(car);
    console.log(await storage.getAll('cars'));
}
start();
//# sourceMappingURL=index.js.map