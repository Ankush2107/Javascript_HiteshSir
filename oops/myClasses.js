// class user {

//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`;
//     }

//     chanegUserName() {
//         return `${this.username.toUpperCase()}`;
//     }

// }

// const app = new user("karan", "karan@fb.com", "54321");
// console.log(app.encryptPassword());
// console.log(app.chanegUserName());


// Behind the sence in different way...

function user(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}

user.prototype.chanegUserName = function() {
    return `${this.username.toUpperCase()}`;
}

const app = new user("karan", "karan@fb.com", "54321");console.log(app.encryptPassword());
console.log(app.chanegUserName());