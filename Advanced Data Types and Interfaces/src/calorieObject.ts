function calorieObject(arr: string[]): void {

    type Food = {
        [key: string]: number;
    }

    const nameArr: string[] = arr.filter((a: string, index: number) => index % 2 === 0);
    const calorieArr: string[] = arr.filter((a: string, index: number) => index % 2 !== 0);
    const printedObj: Food = {};

    for (let i = 0; i < nameArr.length; i++) {
        printedObj[nameArr[i]] = Number(calorieArr[i]);
    }

    console.log(printedObj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);