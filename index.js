const express = require("express");
const app = express();
const port = 3000;
const version = "3.0.0";

// In-memory data store (for simplicity)
let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Jim Doe" },
];

// Route 1: Save a user
app.post("/users", (req, res) => {
  const userName = req.body.userName; // Assuming you're sending user data in the request body
  users.push({
    id: users.length + 1,
    name: userName,
  });
  res.status(201).json(newUser); // Return the newly created user
});

// Route 2: Delete a user by ID
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(204).send(); // Send 204 No Content on success
  } else {
    res.status(404).send("User not found");
  }
});

// Route 3: Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/", (req, res) => {
  res.send(`Test program for test k8s Version: ${version}`);
});

app.get("/healthcheck", (req, res) => {
  res.send(`This healthcheck rute is okey and version is: ${version}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
