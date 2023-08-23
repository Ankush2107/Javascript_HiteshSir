// Object litrals 

// const user = {
//     username: 'Ankush',
//     logInCount: 8,
//     signedIn: true,

//     getUserDetails: function() {
//         // console.log(`Username: ${user.username}`);
//         // console.log(this);
//     }
// }

// console.log(user.getUserDetails());

// new keyword is constructor function
// const promise = new Promise();
// const date = new Date();


function user(username, logInCount, isLoggedIn) {
    this.username = username;
    this.logInCount = logInCount
    this.isLoggedIn = isLoggedIn

    // return this;
}

const userOne = user("hitesh", 12, true);
console.log(userOne);
