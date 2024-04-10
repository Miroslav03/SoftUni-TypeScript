function sumOfNum(num1: string, num2: string): void {

    let sum: number = 0;
    const arr: number[] = [...arguments].map(Number)

    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
        sum += i
    }

    console.log(sum);

}
sumOfNum('1', '5');
sumOfNum('-8', '20');