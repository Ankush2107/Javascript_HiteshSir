const promiseOne = new Promise(function(resolve, reject) {

    // asyn task
    setTimeout(function() {
        console.log("Asyn task is completed");
        resolve();
    }, 2000)
})

promiseOne.then(function() {
    console.log("Promise is consumed");
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Asyn 2 task is completed");
        resolve();
    }, 3000)
}).then(function() {
    console.log("Asyn 2 is consumed");
})


const promiseTwo = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve({username : "Ankush", emailId : "ankush.kumar210701@gmail.com"});
    }, 2000)
})
promiseTwo.then((user) => {
    console.log(user);
})


const promiseThree = new Promise((resolve, reject) => {

    let error = false;
    if(!error) {
        resolve({username: "Karan", password: "mahek"});
    }else {
        reject("ERROR : something went wrong");
    }

})

promiseThree.then((user) => {
    console.log(user);
    return user.password;
}).then((password) => {
    console.log(password);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
}) 


// Using Try catch
const promiseFour = new Promise((resolve, reject) => {

    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username: "Rashmi", password: "1002"});
        }else {
            reject("ERROR : Rashmi went wront")
        }
    }, 3000)
})

async function consumePromiseFour() {
    try {
        const response = await promiseFour;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFour();


// async function getAllUser() {

//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUser();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})