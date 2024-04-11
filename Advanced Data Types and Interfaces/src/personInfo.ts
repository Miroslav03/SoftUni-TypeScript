type Person = {
    firstName: string;
    lastName: string;
    age: number;
};

function personInfo(firstName: string, lastName: string, age: string): Person {
    const returnedObj: Person = { firstName: firstName, lastName: lastName, age: Number(age) }
    return returnedObj;
}

