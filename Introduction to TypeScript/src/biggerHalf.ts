function biggerHalf(arr: number[]): void {

    console.log(arr.sort((num1: number, num2: number) => num1 - num2).slice(arr.length / 2));
}

biggerHalf([4, 7, 2, 5])
biggerHalf([3, 19, 14, 7, 2, 19, 6])