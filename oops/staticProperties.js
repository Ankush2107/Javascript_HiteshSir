class User {

    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Logged in : ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

// const obj = new User("Ankush");
// obj.logMe()
// console.log(obj.createId())


class Teacher extends User {

    constructor(username, email, password) {
       
        super(username)
        this.email = email
        this.password = password
    }
}


const obj = new Teacher("Karan", "karan@fb.com", "123456");
console.log(obj.createId());