const router = require('express').Router();
const baseController = require('../controllers');

router.get('/', baseController.getName);

module.exports = router;