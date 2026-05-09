// this async class is from Cohort 3/Week2-offlinevideos/5.Callback hell,rejects and async/await



// creating a promiified version of setTimeout

// function setTimeoutPromisified(){
//     return new Promise(function(resolve){
//         setTimeout(resolve, duration)
//     })
// }

// function callback(){
//     console.log("1 second has passed!")
// }

// setTimeout => promisified setTimeout

setTimeoutPromisified(1000).then(callback)




// callback hell example

function callback(){
    console.log("hi");
}

// callback example---

setTimeout(function(){
    console.log("hi");
    setTimeout(function(){
        console.log("hello");
        setTimeout(function(){
            console.log("hello there");
        }, 5000);
    }, 3000)
}, 1000);


// promisified way of writing setTimeout 

// promise way of doing it

 
function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    });
}

setTimeoutPromisified(1000).then(function(){
    console.log("hi");
    setTimeoutPromisified(3000).then(function(){
        console.log("hello");
        setTimeoutPromisified(5000).then(function(){
            console.log("hi there!");
        });
    });
});


console.log("outside of callback hell");

 

//  NOW THE WAY OF PROMISE CHAINING--

setTimeoutPromisified(1000)
.then(function(){
    console.log("hi");
    return setTimeoutPromisified(3000);
})
.then(function(){
    console.log("hello");
    return setTimeoutPromisified(5000);
})
.then(function(){
    console.log("hello there")
})




// async await code for promise chaning 

function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    });
}


async function solve(){
    await setTimeoutPromisified(1000);
    console.log("hi");
    await setTimeoutPromisified(3000);
    console.log("hello");
    await setTimeoutPromisified(5000);
    console.log("hi there");
}

solve();

console.log("after solve function ")







// Note : to understand this async code 

const fs = require('fs');

function readFileAsync() {
    return new Promise(function(resolve, reject){
        fs.readFile("asdf.txt", "utf-8", function(err, data){
            // if err 
            if (err){
                reject("file not found");
            } else {
                resolve(data);
            }
        })
    })
}


readFileAsync().then(function(x){
    console.log("files have been read" + x)
})
.catch(function(e){
    console.log(e);
})