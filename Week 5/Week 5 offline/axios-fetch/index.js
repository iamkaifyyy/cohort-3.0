// axios vs fetch 

function main(){
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async response => {
        const json = await response.json();
        // await response.text
        console.log(json.todos.length)
    });    
}

main();


async function main() {
    const response = await fetch("https://sum-server.100xdevs.com/todos")
    const json = await response.json();
    console.log(json.todos.length)
}

// fetch code for practice

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => {
        console.log("fetched data", data);
    })
    .catch(error => {
        console.error("error", error);
    });

// using Axios - external Library way

import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        console.log("Fetched Data", response.data);
    })
    .catch(error => {
        console.error("Error", error)
    })

// using fetch with Async function

async function getData() {
    try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts/1")
        const data = await response.json();
        console.log(data)}
        catch(error){
            console.error("Error", error);
        }
}

getData();

// using Axios as with Async-Await Syntax

import axios from "axios"

async function getData(){
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
        console.log(response.data);
    } catch(error) {
        console.error("Error", error)
    }
}

// hkirat code on axios - external library 
// coding using axios for backend



