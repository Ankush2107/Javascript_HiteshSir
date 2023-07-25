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
