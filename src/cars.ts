import { LocalStorage } from "./data/Storage";
import { Editor } from "./dom/Editor";

console.log('cars');
const storage = new LocalStorage()

start()

async function start() {
    const form = document.getElementById('carId') as HTMLFormElement;
    const editor = new Editor(form, onSubmit);

    const carsData = {
            "make": "asd",
            "model": "",
            "bodyType": "sedan",
            "numberOfSeats": "",
            "transmission": "manual",
            "rentalPrice": ""
    }

    editor.setValues(carsData)
}

async function onSubmit(data) {

}
