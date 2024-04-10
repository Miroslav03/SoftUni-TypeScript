function sumOfNum(num1, num2) {
    let sum = 0;
    const arr = [...arguments].map(Number);
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
        sum += i;
    }
    console.log(sum);
}
sumOfNum('1', '5');
sumOfNum('-8', '20');
