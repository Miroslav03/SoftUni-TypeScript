function evenPositionElements(arr) {
    const string = arr.filter((value, index) => index % 2 === 0).join(' ');
    console.log(string);
}
evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);
