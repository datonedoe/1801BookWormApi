import express from 'express';
import path from 'path'; //a node module

const app = express();

app.post("/api/auth", (req, res) => {
  res.status(400).json({errors: {global: "Invalid credentials"}});
})

app.get("/*", (red, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log("Starting server on port", PORT);
})
