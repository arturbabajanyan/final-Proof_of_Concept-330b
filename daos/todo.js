const ToDo = require('../models/todo');

// Functions to interact with the todo collection
module.exports.createTodo = async (todoData) => {
  const todo = new ToDo(todoData);
  await todo.save();
  return todo;
};

module.exports.getTodosByUserId = async (userId) => {
  return await ToDo.find({ userId });
};

module.exports.updateTodo = async (id, updateData) => {
  return await ToDo.findByIdAndUpdate(id, updateData, { new: true });
};

module.exports.deleteTodo = async (id) => {
  return await ToDo.findByIdAndDelete(id);
};
