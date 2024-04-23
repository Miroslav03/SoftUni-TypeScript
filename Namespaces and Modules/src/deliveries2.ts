import { FoodAndBeverages } from "./deliveries";

interface Person {
    customerName: string;
    visited: boolean;
}

class Courier implements FoodAndBeverages.Delivery {
    constructor(protected placesToVisit: Person[]) {
    }

    newCustomer(customerName: string, visited: boolean = false) {
        const found = this.placesToVisit.find((person: Person) => person.customerName === customerName);
        if (found) {
            throw new Error(`${Object.keys(found)[0]} is already a customer of yours!`);
        } else {
            this.placesToVisit.push({ customerName, visited });
            return `${customerName} just became your client.`;
        }
    }

    visitCustomer(customerName: string) {
        const found = this.placesToVisit.find((person: Person) => person.customerName === customerName);
        if (found) {
            found.visited = true;
        } else {
            throw new Error(`${Object.keys(found)[0]} is not your customer.`);
        }
    }

    showCustomers(): string {
        const finalArr: string[] = [];

        this.placesToVisit.forEach((person: Person) => {
            finalArr.push(`${person.customerName} -> ${person.visited}`);
        });

        return finalArr.join('\n');
    }
};

let courier = new Courier([{ customerName: 'DHL', visited: false }]);

courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');
courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');

console.log(courier.showCustomers())
