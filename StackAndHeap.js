// Stack(Primitive), Heap(Non-Primitive)

let myYoutubeName = "hiteshchoudhary";

let anotherName = myYoutubeName;
anotherName = "chaicurcode";

console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
} 
let userTwo = userOne;
userTwo.email = "ankusk@google.com";

console.log(userOne.email);
console.log(userTwo.email);
