import express from "express";
import { Client } from "pg";

const app = express();

const pgClient = new Client({
    connectionString:
    "postgresql://neondb_owner:npg_h3mC9KDHLMFJ@ep-dark-hall-ap35ixpd-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require",
});

pgClient.connect();

app.post("/signup", (req, res) => {
    const response = await pgClient.query("INSERT INTO users (username, password) VALUES ($1, $2)", [req.body.username, req.body.password]);
    res.json(response.rows);
})