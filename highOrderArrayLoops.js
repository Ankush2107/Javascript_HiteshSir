const map = new Map();
map.set("IN", "India");
map.set("US", "United States of america");
map.set("Fr", "France");
map.set("US", "United States of america");

// console.log(map);
// for (const [key, value] of map) {
//     // console.log(key, " : ", value);
// }
// for (const key in map) {
// //    console.log(key);
// }

const myObject = {
    js : 'Javascript',
    cpp : 'c++',
    rb : 'ruby'
}

// for (const key in myObject) {
//    // console.log(`${key} shortcut for ${myObject[key]}`);
// }


// const programming = ["js", "rb", "py", "java", "cpp"];

// for (const key in programming) {
//    //console.log(programming[key]);
// }

// ++++++++++++++++++++ For Each Loop ++++++++++++++++++++++++++++

const coding = ["js", "rb", "py", "java", "cpp"];

// coding.forEach(function (ele) {
//     console.log(ele);
// });

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    console.log(item);
})

const myCoding = [
    {
        langaugeName : "javascript",
        languageFileName : "js"
    },
    {
        langaugeName : "C++",
        languageFileName : "cpp"
    },
    {
        langaugeName : "java",
        languageFileName : "java"
    },
    {
        langaugeName : "python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langaugeName);
})