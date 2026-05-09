const express = require('express');
const app = express();

// function returns boolean 
 
function isOldEnoughMiddleware(req, res, next){
    if(age >= 14){
        next();
    } else {
        res.json({
            msg: "Sorry you arent of age yet!!!"
        })  
    }
}


app.get("/",isOldEnoughMiddleware , function(req, res){
    res.json({
            msg: "you have successfully riden the ride2"
    })

})
a
app.get("/",isOldEnoughMiddleware ,function(req, res){
    res.json({
            msg: "you have successfully riden the"
    })
})

app.listen(3000);