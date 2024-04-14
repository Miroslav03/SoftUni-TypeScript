class Box<T> {
    constructor(public data: T) {
        this.data = data;
    }

    toString(): string {
        return `${this.data} is of type ${typeof this.data}`
    }
}

let box1 = new Box<string[]>(['test']);
let box2 = new Box<number>(20);
let box3 = new Box<string>('Hello');

console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());