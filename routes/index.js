const { Router } = require("express");
const router = Router();

const auth = require('./auth');
const todo = require('./todos');
const category = require('./categories');

router.use(auth);
router.use(todo);
router.use(category);

module.exports = router;
