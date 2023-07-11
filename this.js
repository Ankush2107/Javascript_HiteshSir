const account = {
    name : "Ankush",
    phone : "123456789",
    balance : "10,000",

    currentBalance : function() {
        // console.log(`${this.name}'s current account balance is ${this.balance} rupees.`);
        // console.log(this);
        
    }
}
account.currentBalance();
account.name = "Karan";
account.currentBalance();
// console.log(this);


// function chai() {
//     let username = "Ankush";
//     console.log(this);
// }

// chai();

// const chai = function() {
//     let username = "Ankush";
//     console.log(this.username);
// }
// chai();

const chai = () => {
    let username = "Ankush";
    console.log(this);
}
chai();

// Implicit return 

const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(6, 5));