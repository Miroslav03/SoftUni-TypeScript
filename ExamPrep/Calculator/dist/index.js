function calculator(number, operator, number2) {
    let result = null;
    switch (operator) {
        case '+': {
            result = number + number2;
            break;
        }
        case '-': {
            result = number - number2;
            break;
        }
        case '*': {
            result = number * number2;
            break;
        }
        case '/': {
            result = number / number2;
            break;
        }
    }
    ;
    console.log(result.toFixed(2));
}
;
calculator(5, "+", 10);
calculator(25.5, "-", 3);
calculator(9, "/", 2);
calculator(7, "*", 5);
