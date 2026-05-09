//  // this is for async.js

//  // normal function in Js

//  function sum(a, b){
//     return a+b;
//  }

//  let ans = sum(2, 3)
//  console.log(ans);

// // find sum of 1 to number
// // 1 => n

// function sum(n){
//     let ans = 0;
//     for(let i =1; i <= n ; i++){
//         ans = ans + i;
//     }
//     return
// }

// const answer = sum(10);
// console.log(answer);

// const ans1 = sum(100);
// console.log(ans1);
// const ans2 = sum(1000);
// console.log(ans2);

// // I/0 heavy Operationsss

//  const contents = fs.readFileSync("a.txt", "utf-8");
//  console.log(contents);

//  var user = {
//     name: "kaifyyy",
//     age: 21
//  }

//  console.log(user.age);

// // fs is external library used for operations on File System

// const data = read.readFileSync('b.txt','utf-8');
// console.log(data);

// // require is to use external module by importing it..

// // use readFile function instead of readFileSync that use Synchoronous execution...

// /// FUNCTIONAL ARGUMENTS

// function sum(a, b){
//     return a + b;
// }

// function subtract(a, b){
//     return a - b;
// }

// function multiply(a, b){
//     return a * b;
// }

// function divide(a, b){
//     return a / b;
// }

// // passing a function as an argument to another function

// function sum(a, b){
//     return a + b;
// }

// function subtract(a, b){
//     return a - b;
// }

// function multiply(a, b){
//     return a * b;
// }

// function divide(a, b){
//     return a / b;
// }

// function doOperation(a, b, op){
//     return op(a, b)
// }

// console.log(doOperationoOperation(1, 2 , sum));

// // ********* Asynchronous Code, CALLBACKS ************

// const fs = require('fs');

// function read(err, data){
//     console.log(data);
// }

// const contents1 = fs.readFile("a.txt", "utf-8", read());
// console.log(contents1);

// const contents2 = fs.readFile("b.txt", "utf-8",);
// console.log("done");

// *** Callbacks ***

// const fs = require("fs");

// function print(err, data) {
//   if(err){
//     console.log("file not found");
//   } else {
//     console.log(data);
//   }
// }

// fs.readFile("a.txt", "utf-8", print);

// fs.readFile("b.txt", "utf-8", print);

// setTimeout(() => {
//   console.log("hello");
// }, 1000);

// console.log("Done!");

// Initial callbacks


function timeout(){
    console.log("setTimeout runs");
}

console.log("done")

setTimeout(timeout, 10000);

console.log("welcome to loupe");

let c = 0;

for(let i = 0; i<100000000; i++){
    c = c + 1;
    // return c;
}

console.log(c);

console.log("expensive operation done");
// how to make setTimeout synchornous!


function setTimeoutSync(timeout){
    let startTime = new Date();
    while(1){
        let currentTime = new Date();
        if(currentTime.getTime() - startTime.getTime() > timeout);
    }
}

setTimeoutSync(1000);

console.log("hi there");