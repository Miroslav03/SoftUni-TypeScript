function opinionPoll(info) {
    class Person {
        name;
        age;
        constructor(name, age) {
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
