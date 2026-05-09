
// creating our very own CLI 
// Assignment - 1



const fs = require('fs');
const { totalmem } = require('os');

function main(filename){
  fs.readFile(filename, "utf-8", function(err, data){
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      if(data[i] === " "){
        total++;
      }
    }
    console.log(`total no of words : ${total + 1}`);
  })
}
 
main("a.txt");

