class User {

    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Logged In ${this.username}`);
    }
}

class Teacher extends User {


    constructor(username, email, password) {
        super()
        this.username = username;
        this.email = email;
        this.password = password;
    }

    teachingAssistent() {
        console.log("I am a teaching assistent");
    }

}

const detail = new Teacher("Ankush", "ankush@fb.com", "98745");
detail.logMe()
console.log(User instanceof Teacher);