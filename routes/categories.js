const express = require('express');
const CategoryDao = require('../daos/category');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/categories', auth, async (req, res) => {
  try {
    const categories = await CategoryDao.getCategoriesByUserId(req.user._id);
    res.send(categories);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post('/categories', auth, async (req, res) => {
  const categoryData = {
    ...req.body,
    userId: req.user._id,
  };
  try {
    const category = await CategoryDao.createCategory(categoryData);
    res.status(201).send(category);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.put('/categories/:id', auth, async (req, res) => {
  try {
    const category = await CategoryDao.updateCategory(req.params.id, req.body);
    if (!category) {
      return res.status(404).send({ error: 'Category not found' });
    }
    res.send(category);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete('/categories/:id', auth, async (req, res) => {
  try {
    const category = await CategoryDao.deleteCategory(req.params.id);
    if (!category) {
      return res.status(404).send({ error: 'Category not found' });
    }
    res.send(category);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
