import { Client } from "pg";

async function insertData() {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "mohdkaif",
    password: "",
    database: "postgres",
  });

  try {
    await client.connect();

    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
    const res = await client.query(insertQuery);
    console.log(res);
    console.log("Insertion success:", res); // Output insertion result
  } catch (err) {
    console.error("Error during the insertion:", err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData();
