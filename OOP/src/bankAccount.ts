function bankAccount(commands: string): void {

    const accounts: { [id: number]: BankAccount } = {};

    class BankAccount {
        private static _id: number = 0;
        private static _intrestRate: number = 0.02;

        id: number
        private balance: number = 0;

        constructor() {
            BankAccount._id++;
            this.id = BankAccount._id
        }

        static setIntrestRate(newRate: number): void {
            BankAccount._intrestRate = newRate;
        }

        getIntrestRate(years: number): number {
            return this.balance * BankAccount._intrestRate * years;
        }

        deposit(number: number): void {
            this.balance += number
        }


    }
    const commandsArr: string[] = commands.split('\n').filter((command: string) => command !== '');

    commandsArr.forEach((command: string) => {
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
    })

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
End`) 