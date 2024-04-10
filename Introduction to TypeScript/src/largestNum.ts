function largestNum(num1: number, num2: number, num3: number): void {
    const arr: number[] = [...arguments].sort((num1: number, num2: number) => num1 - num2);
    console.log(`The largest number is ${arr[arr.length - 1]}`);

}
largestNum(5, -3, 16);
largestNum(-3, -5, -22.5);