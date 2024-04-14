class CompareElements<T> {
    constructor(public arr: T[]) {
        this.arr = arr;
    }

    compare(compareElement: T): number {
        let totalMatches = 0;
        this.arr.forEach((element: T) => {
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
console.log(b.compare(1))




