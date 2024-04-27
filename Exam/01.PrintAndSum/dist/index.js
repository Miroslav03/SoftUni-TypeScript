function printAndSum(number1, number2) {
    let sum = 0;
    for (let i = number1; i <= number2; i++) {
        console.log(i);
        sum += i;
    }
    console.log(`Sum: ${sum}`);
}
;
printAndSum(5, 10);
console.log('--------------------');
printAndSum(0, 26);
console.log('--------------------');
printAndSum(50, 60);
