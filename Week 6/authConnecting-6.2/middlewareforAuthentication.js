// code for authentication using middlware

// just for practice 


const express = require("express")
const app = express();

function checkAuth(req, res, next) {
    const token = req.headers["authorization"]

    if(token === "12345"){
        next();
    } else {
        res.status(401).json({
            message: "Unauthorized Access";
        })
    }
}

app.get("/dashboard", checkAuth, (req, res) => {
    res.send("Welcome to the dashboard!");
  });

app.get("/", (req, res) => {
    res.send("Public route,no auth needed");   
});


app.listen(3000);