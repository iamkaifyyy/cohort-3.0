import express from "express"
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
const app = express();

app.get("/", async(req, res){
    const users = await client.user.findMany();
    res.json();
})

async function createUser()
{
    const user = await client.user.findFirst({
        where: {
            id: 100
        }
        select: {
            username: true
        }
    })

    console.log(user?.password)
}
createUser()

app.listen(3000);


