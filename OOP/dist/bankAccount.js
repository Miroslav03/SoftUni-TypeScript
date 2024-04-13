function bankAccount(commands) {
    const accounts = {};
    class BankAccount {
        static _id = 0;
        static _intrestRate = 0.02;
        id;
        balance = 0;
        constructor() {
            BankAccount._id++;
            this.id = BankAccount._id;
        }
        static setIntrestRate(newRate) {
            BankAccount._intrestRate = newRate;
        }
        getIntrestRate(years) {
            return this.balance * BankAccount._intrestRate * years;
        }
        deposit(number) {
            this.balance += number;
        }
    }
    const commandsArr = commands.split('\n').filter((command) => command !== '');
    commandsArr.forEach((command) => {
        const [commandName, idString, amountOrYearsString] = command.split(' ');
        const id = Number(idString);
        const amountOrYears = Number(amountOrYearsString);
        switch (commandName) {
            case 'Create': {
                const acc = new BankAccount();
                accounts[acc.id] = acc;
                console.log(`Account ID${acc.id} created`);
                break;
            }
            case 'Deposit': {
                if (!accounts[id]) {
                    console.log(`Account does not exist`);
                    break;
                }
                accounts[id].deposit(amountOrYears);
                console.log(`Deposited ${amountOrYears} to ID${accounts[id].id}`);
                break;
            }
            case 'SetInterest': {
                BankAccount.setIntrestRate(id);
                break;
            }
            case 'GetInterest': {
                if (!accounts[id]) {
                    console.log(`Account does not exist`);
                    return;
                }
                const interest = accounts[id].getIntrestRate(amountOrYears);
                console.log(`${interest.toFixed(2)}`);
                break;
            }
            case 'End': {
                return;
            }
        }
    });
}
/* bankAccount(`
Create
Deposit 1 20
GetInterest 1 10
End`
); */
bankAccount(`
Create
Create
Deposit 1 20
Deposit 3 20
Deposit 2 10
SetInterest 1.5
GetInterest 1 1
GetInterest 2 1
GetInterest 3 1
End`);
