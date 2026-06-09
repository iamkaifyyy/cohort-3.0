import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import { userModel } from "./db.js";

const app = express();

app.post("/api/v1/signup", async (req, res) => {
    // zod validation here, hash the password 
    const user = req.body.username;
    const password = req.body.password;

    await userModel.create({
        username: user,
        password: password
    })

    res.json({
        message: "User Signed up"
    })
});

app.post("/api/v1/signin", (req, res) => {

});

app.post("/api/v1/content", (req, res) => {

});

app.get("/api/v1/content", (req, res) => {

});

app.listen(3000);