function mathOperations(num1: number, num2: number, operation: string): void {

    switch (operation) {
        case '+': {
            console.log(num1 + num2);
            break;
        }
        case '-': {
            console.log(num1 - num2);
            break;
        }
        case '*': {
            console.log(num1 * num2);
            break;
        }
        case '/': {
            console.log(num1 / num2);
            break;
        }
        case '%': {
            console.log(num1 % num2);
            break;
        }
        case '**': {
            console.log(num1 ** num2);
            break;
        }
    }
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');