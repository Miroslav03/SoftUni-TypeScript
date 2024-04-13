function carInfo(carInfo: string): void {
    class Car {
        private _brand: string;
        private _model: string;
        private _horsePower: number;
        constructor(brand: string, model: string, horsePower: number) {
            this._brand = brand;
            this._model = model;
            this._horsePower = horsePower;
        }
        get brand(): string {
            return this._brand;
        }
        set value(newBrandName: string) {
            this._brand = newBrandName;
        }
        get model(): string {
            return this._model;
        }
        set model(newModelName: string) {
            this._model = newModelName;
        }
        get horsePower(): number {
            return this._horsePower;
        }
        set horsePower(newHorsePower: number) {
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