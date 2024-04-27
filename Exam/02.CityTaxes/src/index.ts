
type City = {
    name: string;
    population: number;
    treasury: number;
    taxRate: number;
    collectTaxes(): void;
    applyGrowth(percentage: number): void;
    applyRecession(percentage: number): void;
}


function cityTaxes(name: string, population: number, treasury: number): City {

    const object: City = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes(): void {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage: number): void {
            this.population += Math.floor(percentage / 100 * this.population);
        },
        applyRecession(percentage: number): void {
            this.treasury -= Math.floor(percentage / 100 * this.treasury);
        }
    }
    return object;

}


const city =

    cityTaxes('Tortuga',

        7000,

        15000);

city.collectTaxes();

console.log(city.treasury);

city.applyGrowth(5);

console.log(city.population);