function aggregateElements(arr) {
    console.log(arr.reduce((a, c) => a + c, 0));
    console.log(arr.reduce((a, c) => a + 1 / c, 0));
    console.log(arr.join(''));
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
