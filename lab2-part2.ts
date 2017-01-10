 class SavingsAccount {

    private initialBalance:number;
    private ownerName:string;
    private balance:number;
    private countWithdrawals;

    constuctor(balance:number, name:string) {
        this.initialBalance = balance;
        this.ownerName = name;
        this.balance = this.initialBalance;
        this.countWithdrawals = 0;
    }

    depost(amount:number) {
        return this.balance = this.balance + amount;
    }

    withdrawal(amount:number) {
        if (this.countWithdrawals == 3) {
            console.log("Error: You have exceeded the withdrawal limit ");
            return;
        } else {
            this.countWithdrawals++;
            return this.balance = this.balance - amount;
        }
    }

    checkBalance():void {
        console.log(`${this.ownerName}, your account balance is ${this.balance}`);
    }
}

let myBalance = new SavingsAccount(1200,"Makenzie");
 