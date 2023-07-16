//********************************************* Filter **********************************************************

 // const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//    return num > 4
// });

// const newNums = [];

// myNums.forEach((num) => {
//     if(num > 4) {
//         newNums.push(num);
//     }
// })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


let userBooks = books.filter( (bk) => bk.genre === "History");

userBooks = books.filter( (bk) => {
    return bk.publish >= 1980 && bk.genre === "History"
});
console.log(userBooks);

//**************************************************** Map *********************************************************** 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map( (num) => num + 10)

const newNums = myNums.map( (num) => num * 10).map( (num) => num + 1).filter( (num) => num >= 40);

console.log(newNums);


//************************************************* Reduce ***********************************************************

const nums = [1, 2, 3, 4, 5];

// const sum = nums.reduce( function(acc, curr) {
//     console.log(`acc: ${acc} and curr: ${curr}`);
//     return acc + curr
// }, 0);

const sum = nums.reduce( (acc, curr) => acc + curr, 0)

console.log(sum);

const shoppingCart = [
    {
        itemName : "java course",
        price : 999
    },
    {
        itemName : "Mobile Dev",
        price : 4999
    },
    {
        itemName : "UI/UX Dev",
        price : 5999
    },
    {
        itemName : "Video Editing",
        price : 1999
    },
    {
        itemName : "Data Science",
        price : 7999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);