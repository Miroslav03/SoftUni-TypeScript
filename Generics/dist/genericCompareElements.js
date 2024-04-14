class CompareElements {
    arr;
    constructor(arr) {
        this.arr = arr;
        this.arr = arr;
    }
    compare(compareElement) {
        let totalMatches = 0;
        this.arr.forEach((element) => {
            if (element === compareElement) {
                totalMatches++;
            }
        });
        return totalMatches;
    }
}
let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
console.log(c.compare('b'));
let b = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
console.log(b.compare(1));
