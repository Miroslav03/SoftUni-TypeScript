interface Dealership<T> {
    dealershipName: T;
    soldCar: number;
}

interface Actions<T> {
    sellCar: (dealerId: T, model: T) => void;
}

class CarDealer<T> implements Dealership<T>, Actions<T> {
    modelsSold = {};
    soldCar: number = 0;
    constructor(public dealershipName: T) {
        this.dealershipName = dealershipName;
    }

    sellCar(dealerID: T, model: T): void {
        this.modelsSold[dealerID.toString()] = model;
        this.soldCar++;
    }

    showDetails() {
        console.log(this.dealershipName);
        for (const [id, model] of Object.entries(this.modelsSold)) {
            console.log(`${id} sold ${model}`);
        }
    }
}

let dealership = new CarDealer('SilverStar');

dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');

dealership.showDetails();