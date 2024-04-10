function biggerHalf(arr) {
    console.log(arr.sort((num1, num2) => num1 - num2).slice(arr.length / 2));
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
