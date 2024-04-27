import { Drink } from "./Drink";

export class VendingMachine {
    private buttonCapacity: number;
    private drinks: Drink[];

    constructor(buttonCapacity: number) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }

    addDrink(drink: Drink): void {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }

    removeDrink(name: string): boolean {
        const filtred = this.drinks.findIndex((object: Drink) => object.name === name);

        if (filtred === -1) {
            return false;
        } else {
            this.drinks = this.drinks.filter((obj: Drink, index: number) => index !== filtred)
            return true;
        }
    }

    getLongest(): string {
        const sortedByLongest: Drink[] = this.drinks.sort((obj1: Drink, obj2: Drink) => obj2.volume - obj1.volume);
        return sortedByLongest[0].toString();
    }

    getCheapest(): string {
        const sortedByPrice: Drink[] = this.drinks.sort((obj1: Drink, obj2: Drink) => obj1.price - obj2.price);
        return sortedByPrice[0].toString();
    }

    buyDrink(name: string): string {
        const found = this.drinks.find((obj1: Drink) => obj1.name === name);
        return found.toString();
    }

    getCount(): number {
        return this.drinks.length;
    }

    report(): string {
        const arrString: string[] = [];

        this.drinks.forEach((obj: Drink) => {
            arrString.push(obj.toString());
        });

        return `Drinks available:\n${arrString.join('\n')}`;
    }
}