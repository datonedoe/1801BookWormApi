import express from 'express';
import path from 'path'; //a node module
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import Promise from 'bluebird';
//routes
import auth from './routes/auth';
import users from "./routes/users";
import books from "./routes/books";

dotenv.config();
const app = express();
app.use(bodyParser.json());
mongoose.Promise = Promise; //override mongoose Promise with bluebird promise lib
mongoose.connect(process.env.MONGODB_URL);


app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/books', books);

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
