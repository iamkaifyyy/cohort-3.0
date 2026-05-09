// this is for sample repo for creating an HTTP server , this code is used extracted from the Kirat Sir Lecture Slides -- Week 5

// link: https://petal-estimate-4e9.notion.site/HTTP-Deep-dive-d59b6336fa5a46daa56c21063578d400


const express = require('express');
const app = express();

app.get("/sum", function(req, res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res){
    const a = req.query.a;
    const b = req.query.fb;

    res.json({
        ans: a / b
    })
});

app.get("/subtract", function(req,res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a - b
    })
});

app.listen(3000);


