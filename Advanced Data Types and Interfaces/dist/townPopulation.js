function townPopulation(townArrInfo) {
    const townsArr = [];
    townArrInfo.map((townInfo) => {
        const [stringName, stringPopulation] = townInfo.split(' <-> ');
        const population = Number(stringPopulation);
        const existing = townsArr.find((town) => town.name === stringName);
        if (existing) {
            existing.population += population;
        }
        else {
            townsArr.push({ name: stringName, population });
        }
    });
    townsArr.map((town) => console.log(`${town.name} : ${town.population}`));
}
townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);
townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);
