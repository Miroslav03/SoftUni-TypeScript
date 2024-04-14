class CarDealer {
    dealershipName;
    modelsSold = {};
    soldCar = 0;
    constructor(dealershipName) {
        this.dealershipName = dealershipName;
        this.dealershipName = dealershipName;
    }
    sellCar(dealerID, model) {
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
