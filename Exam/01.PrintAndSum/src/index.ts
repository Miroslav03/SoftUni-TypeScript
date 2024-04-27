function printAndSum(number1: number, number2: number): void {

    let sum: number = 0;

    for (let i = number1; i <= number2; i++) {
        console.log(i);
        sum += i;
    }
    console.log(`Sum: ${sum}`);

};

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);