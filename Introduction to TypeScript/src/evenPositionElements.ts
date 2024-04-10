function evenPositionElements(arr: string[]): void {

    const string: string = arr.filter((value: string, index: number) => index % 2 === 0).join(' ');
    console.log(string);

}

evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);

