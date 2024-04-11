type TownWithPopulation = {
    name: string;
    population: number
}

function townPopulation(townArrInfo: string[]): void {

    const townsArr: TownWithPopulation[] = [];

    townArrInfo.map((townInfo: string) => {
        const [stringName, stringPopulation] = townInfo.split(' <-> ');
        const population: number = Number(stringPopulation);

        const existing = townsArr.find((town: TownWithPopulation) => town.name === stringName);
        
        if (existing) {
            existing.population += population;
        } else {
            townsArr.push({ name: stringName, population });
        }
    })

    townsArr.map((town: TownWithPopulation) => console.log(`${town.name} : ${town.population}`));

}


townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])