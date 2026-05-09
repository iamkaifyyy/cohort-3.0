// **** promises in JS ****


console.log("promises JS");

// promises in JS


function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve ,ms));
};

function callback(){
    console.log("3 seconds have passed!");
}

setTimeoutPromisified(3000).then(callback);


// function of promise

function promiseCallback(resolve){
    setTimeout(resolve, 3000);
}

promiseCallback(function(){
    console.log('hi')
})


// another way of writing

function waitfor3s(resolve){
    setTimeout(resolve, 3000);
}

function main(){
    console.log("main is called");
}

waitfor3s(main); 


