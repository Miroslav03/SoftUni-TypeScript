"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const filtred = this.drinks.findIndex((object) => object.name === name);
        if (filtred === -1) {
            return false;
        }
        else {
            this.drinks = this.drinks.filter((obj, index) => index !== filtred);
            return true;
        }
    }
    getLongest() {
        const sortedByLongest = this.drinks.sort((obj1, obj2) => obj2.volume - obj1.volume);
        return sortedByLongest[0].toString();
    }
    getCheapest() {
        const sortedByPrice = this.drinks.sort((obj1, obj2) => obj1.price - obj2.price);
        return sortedByPrice[0].toString();
    }
    buyDrink(name) {
        const found = this.drinks.find((obj1) => obj1.name === name);
        return found.toString();
    }
    getCount() {
        return this.drinks.length;
    }
    report() {
        const arrString = [];
        this.drinks.forEach((obj) => {
            arrString.push(obj.toString());
        });
        return `Drinks available:\n${arrString.join('\n')}`;
    }
}
exports.VendingMachine = VendingMachine;
