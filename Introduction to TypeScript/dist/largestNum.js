function largestNum(num1, num2, num3) {
    const arr = [...arguments].sort((num1, num2) => num1 - num2);
    console.log(`The largest number is ${arr[arr.length - 1]}`);
}
largestNum(5, -3, 16);
largestNum(-3, -5, -22.5);
