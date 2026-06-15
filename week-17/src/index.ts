import express from "express"
import { Client } from "pg"

const app = express();
app.use(express.json());

const pgClient = new Client("fuck you use your own postgresql db")

pgClient.connect();

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const city = req.body.city;
    const country = req.body.country;
    const pincode = req.body.pincode;

    try {

        await pgClient.query("BEGIN;");

        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`

        const response = await pgClient.query(insertQuery, [username, email, password]);

        await pgClient.query("COMMIT;")

        return res.json({
            message: "User created successfully"
        })
    }

    catch (e) {
        console.log(e);
        res.json({
            message: "User creation failed"
        })
    }
})

app.listen(3000, () => console.log('Server running on port 3000'))
