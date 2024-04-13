function opinionPoll(info: string): void {
    class Person {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

    }

    const [name, ageString] = info.split(' ');
    const age = Number(ageString);

    const person = new Person(name, age);

    console.log(`${person.name} is ${person.age} years old.`);
}

opinionPoll('Peter 12');
opinionPoll('Sofia 33');