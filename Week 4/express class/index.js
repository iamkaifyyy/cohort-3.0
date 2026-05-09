const express = require('express');
const app = express();

const users = [{
    name: "kaify",
    kidneys: [{
        healthy: false
    }]
}];

app.get("/", function(req, res){
    const johnKidneys = users[0].kidneys;
    console.log(johnKidneys);

    const noofKidneys = johnKidneys.length; 
    
    
});

app.post("/", function(req, res){

})


app.put("/", function(req, res){
    for(let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
})

app.delete("/", function(req, res){
    const newKidneys = [];
    for(let i = 0; )
})


app.listen(3000);

