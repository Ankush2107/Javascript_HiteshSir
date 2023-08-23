const myHeroes = ["thor", "captain",];

const newHeroes = {
    flash: "speed",
    spiderman: "sling",
    
    getSpiderManPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ankush = function(){
    console.log("Ankush has all the powers");
}

Array.prototype.hiiAnkush = function() {
    console.log("Ankush is saying hello");
}

newHeroes.ankush();
myHeroes.ankush();


// newHeroes.hiiAnkush();
myHeroes.hiiAnkush();



/* Inheritance */ 

const user = {
    username: "karan",
    password: "123456"
}

const image = {
    uploadImage: "Done"
}

const deleteImage = {
    yes: "done",
    no: "not done",
    // __proto__: user
} 

// image.__proto__ = user;

Object.setPrototypeOf(deleteImage, image);



const anotherUserName = "Aman    ";

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`TrueLength of String is : ${this.trim().length}`);
}

anotherUserName.trueLength()
"Ankush".trueLength();
"Rashmi".trueLength();
"Karan".trueLength();