type Hero = {
    Hero: string;
    level: string;
    items: string[];
};

function inventory(heroArr: string[]): void {

    const arr: Hero[] = [];

    for (const hero of heroArr) {
        const [Hero, level, ...items] = hero.split(' / ');
        arr.push({ Hero, level, items });
    }

    arr.sort((hero1: Hero, hero2: Hero) => Number(hero1.level) - Number(hero2.level));

    arr.map((heroObj: Hero) => {
        for (const [key, value] of Object.entries(heroObj)) {
            key === 'Hero' ? console.log(`${key}: ${value}`) : console.log(`${key} => ${value}`)
        }
    })
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);


inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);