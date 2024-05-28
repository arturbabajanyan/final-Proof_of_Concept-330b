const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  completed: { type: Boolean, default: false },
  dueDate: { type: Date },
});

module.exports = mongoose.model('ToDo', todoSchema);
