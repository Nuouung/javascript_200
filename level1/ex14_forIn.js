let store = {
    snack: 1000,
    flower: 5000,
    beverage: 2000
}

// for (let item in store) {
//     console.log(`The price of ${item} is ${store[item]}`);
// }

class Store {
    constructor(snack, flower, beverage) {
        this.snack = snack;
        this.flower = flower;
        this.beverage = beverage;
    }
}

const store2 = new Store(1000, 5000, 2000);

for (let item in store2) {
    console.log(`The price of ${item} is ${store2[item]}`);
}