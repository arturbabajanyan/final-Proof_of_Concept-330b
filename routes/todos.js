const express = require('express');
const ToDoDao = require('../daos/todo');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/todos', auth, async (req, res) => {
  try {
    const todos = await ToDoDao.getTodosByUserId(req.user._id);
    res.send(todos);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post('/todos', auth, async (req, res) => {
  const todoData = {
    ...req.body,
    userId: req.user._id,
  };
  try {
    const todo = await ToDoDao.createTodo(todoData);
    res.status(201).send(todo);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.put('/todos/:id', auth, async (req, res) => {
  try {
    const todo = await ToDoDao.updateTodo(req.params.id, req.body);
    if (!todo) {
      return res.status(404).send({ error: 'ToDo not found' });
    }
    res.send(todo);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete('/todos/:id', auth, async (req, res) => {
  try {
    const todo = await ToDoDao.deleteTodo(req.params.id);
    if (!todo) {
      return res.status(404).send({ error: 'ToDo not found' });
    }
    res.send(todo);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
