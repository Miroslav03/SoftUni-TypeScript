function carInfo(carInfo) {
    class Car {
        _brand;
        _model;
        _horsePower;
        constructor(brand, model, horsePower) {
            this._brand = brand;
            this._model = model;
            this._horsePower = horsePower;
        }
        get brand() {
            return this._brand;
        }
        set value(newBrandName) {
            this._brand = newBrandName;
        }
        get model() {
            return this._model;
        }
        set model(newModelName) {
            this._model = newModelName;
        }
        get horsePower() {
            return this._horsePower;
        }
        set horsePower(newHorsePower) {
            this._horsePower = newHorsePower;
        }
    }
    const [brand, model, horsePowerString] = carInfo.split(' ');
    const horsePower = Number(horsePowerString);
    const car = new Car(brand, model, horsePower);
    console.log(`The car is: ${car.brand} ${car.model} - ${car.horsePower} HP`);
}
carInfo('Chevrolet Impala 390');
carInfo('Skoda Karoq 150');
