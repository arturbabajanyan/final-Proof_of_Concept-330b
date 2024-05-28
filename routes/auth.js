const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserDao = require('../daos/user');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);
  try {
    const user = await UserDao.createUser({ username, password: hashedPassword });
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserDao.findUserByUsername(username);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.send({ user, token });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
