class Account {
    //these were originally private but I had errors when I copied the other classes into this file
    initialBalance:number;
    ownerName:string;
    balance:number;
    countWithdrawals:number;

    deposit(amount:number) {
        return this.balance = this.balance + amount;
    }

    checkBalance():void {
        console.log(`${this.ownerName}, your account balance is ${this.balance}`);
    }

}

class CheckingsAccount extends Account{

    constuctor(balance:number, name:string) {
        super.initialBalance = balance;
        super.ownerName = name;
        super.balance = super.initialBalance;
    }

    deposit(amount:number) {
        super.deposit(amount);
    }

    withdrawal(amount:number) {
        return super.balance = super.balance - amount;
    }

    checkBalance():void {
        super.checkBalance();
    }

}

 class SavingsAccount extends Account{

    constuctor(balance:number, name:string) {
        super.initialBalance = balance;
        super.ownerName = name;
        super.balance = this.initialBalance;
        super.countWithdrawals = 0;
    }

    deposit(amount:number) {
        super.deposit(amount);
    }

    withdrawal(amount:number) {
        if (super.countWithdrawals == 3) {
            console.log("Error: You have exceeded the withdrawal limit ");
            return;
        } else {
            super.countWithdrawals++;
            return super.balance = super.balance - amount;
        }
    }
    checkBalance():void {
        super.checkBalance();
    }
}


let mySavings:SavingsAccount = new SavingsAccount(1200,"Makenzie");
let myChecking:SavingsAccount = new CheckingAccount(1200,"Makenzie");

