const promiseOne = new Promise((resolve, reject) => {
    // Do an asyn task
    // DB calls, cryptography, network
    setTimeout(function() {
        console.log("Asyn task is Completed");
        resolve();
    }, 1000);
})
promiseOne.then(function() {
    console.log("Promise consumed");
})



new Promise((resolve, reject) => {

    setTimeout(function() {
        console.log("Asyn 2 task Completed");
        resolve();
    }, 1000)
}).then(function() {
    console.log("Asyn 2 resolved");
})



const promiseThree = new Promise((resolve, reject) => {

    setTimeout(function() {
        resolve({username: "Ankush", email: "ankush.kumar210701@gmail.com"})
    } ,1000)
})

promiseThree.then(function(user) {
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false
        if(!error) {
            resolve({username: "Ankush", password: "kumar2107"});
        }else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})


const promiseFive = new Promise((resolve, reject) => {

    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username: "Javascript", password: "123"});
        }else {
            reject('ERROR: Js went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()