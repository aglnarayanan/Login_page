const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // <-- Add this line
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const username = "john";
const password = "123";

app.get("/home", (req, res) => {
  res.send("<h2>Welcome to the server dashboard 🎉</h2>");
});

app.post("/login", (req, res) => {
  const { username: user, password: pass } = req.body;

  if (user === username && pass === password) {
    res.json({ success: true, message: "Login successful ✅" });
  } else {
    res.json({ success: false, message: "Login failed ❌" });
  }
});

app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});
