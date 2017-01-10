class CheckingsAccount{

    private initialBalance:number;
    private ownerName:string;
    private balance:number;

    constuctor(balance:number, name:string) {
        this.initialBalance = balance;
        this.ownerName = name;
        this.balance = this.initialBalance;
    }

    depost(amount:number) {
        return this.balance = this.balance + amount;
    }

    withdrawal(amount:number) {
        return this.balance = this.balance - amount;
    }

    checkBalance():void {
        console.log(`${this.ownerName}, your account balance is ${this.balance}`);
    }
}