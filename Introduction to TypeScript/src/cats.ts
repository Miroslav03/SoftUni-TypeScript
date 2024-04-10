function cats(arr: string[]): void {

    class Cats {
        constructor(public name: string, public age: number) {
            this.name = name;
            this.age = age;
        }

        meow(): void {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const el of arr) {
        let [name, age] = el.split(' ')
        const cat = new Cats(name, Number(age))
        cat.meow();
    }

}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);