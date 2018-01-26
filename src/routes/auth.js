import express from 'express';
import User from '../models/User';

const router = express.Router();

router.post('/', (req, res) => {
  const {credentials } = req.body;
  //find user by email, will return promise
  User.findOne({email: credentials.email}).then(user => {
    //if user if found
    if (user && user.isValidPassword(credentials.password)) {
      res.json({ user: user.toAuthJSON()})
    } else { //if user is not found
      res.status(400).json({errors: {global: "Invalid credentials"}})
    }
  })
})

export default router;
