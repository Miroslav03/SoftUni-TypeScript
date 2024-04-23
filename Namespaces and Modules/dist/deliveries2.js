"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Courier {
    placesToVisit;
    constructor(placesToVisit) {
        this.placesToVisit = placesToVisit;
    }
    newCustomer(customerName, visited = false) {
        const found = this.placesToVisit.find((person) => person.customerName === customerName);
        if (found) {
            throw new Error(`${Object.keys(found)[0]} is already a customer of yours!`);
        }
        else {
            this.placesToVisit.push({ customerName, visited });
            return `${customerName} just became your client.`;
        }
    }
    visitCustomer(customerName) {
        const found = this.placesToVisit.find((person) => person.customerName === customerName);
        if (found) {
            found.visited = true;
        }
        else {
            throw new Error(`${Object.keys(found)[0]} is not your customer.`);
        }
    }
    showCustomers() {
        const finalArr = [];
        this.placesToVisit.forEach((person) => {
            finalArr.push(`${person.customerName} -> ${person.visited}`);
        });
        return finalArr.join('\n');
    }
}
;
let courier = new Courier([{ customerName: 'DHL', visited: false }]);
courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');
courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');
console.log(courier.showCustomers());
