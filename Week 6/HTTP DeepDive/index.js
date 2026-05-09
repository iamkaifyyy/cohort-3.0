const express = require("express");
const jwt = require("jsonwebtoken");
const { use } = require("react");
const JWT_SECRET = "randomkaifyykashish";

const app = express();
app.use(express.json()); // ✅ fixed this line

const users = [];

/*
// ✅ Function to generate random token
function generateToken() {
  const options = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ];

  let token = "";

  for (let i = 0; i < 32; i++) {
    token += options[Math.floor(Math.random() * options.length)];
  }
  return token;
}

*/


// ✅ Signup route
app.post("/signup", (req, res) => { 
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  users.push({
     username, password 
    });
  res.json({ message: "You're signed up successfully!" });
});

// ✅ Signin route
app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      foundUser = users[i];
      break; // stop after finding the user
    }
  }

  if (foundUser) {
    const token = jwt.sign({
      username: username
    }, JWT_SECRET); 


    // foundUser.token = token;
    res.json({
      message: "Login successful!",
      token: token
    });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

app.get("/me", function(res, res){
  const token = req.headers.token;
  const decodedInformation = jwt.verify(token, JWT_SECRET);
  const username = decodedInformation.username;




  let  foundUser = token;

  for (let i = 0; i < users.length; i++) {
    if(users[i].token == token) {
      foundUser = users[i]
    }
    
  }

  if(foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password
    })
  } else {
    res.json({
      message: "Sorry Invalid token"
    })
  }

});



app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});