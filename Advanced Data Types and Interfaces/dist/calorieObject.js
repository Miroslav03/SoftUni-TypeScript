function calorieObject(arr) {
    const nameArr = arr.filter((a, index) => index % 2 === 0);
    const calorieArr = arr.filter((a, index) => index % 2 !== 0);
    const printedObj = {};
    for (let i = 0; i < nameArr.length; i++) {
        printedObj[nameArr[i]] = Number(calorieArr[i]);
    }
    console.log(printedObj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
