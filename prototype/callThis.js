function setUserName(username) {
    this.username = username;
}

function createUserDetail(username, email, password) {

    setUserName.call(this, username)
    this.email = email;
    this.password = password;
}

const detail = new createUserDetail("Ankush", "ankush@gmail.com", "12345");

console.log(detail);