const router = require('express').Router();
const baseController = require('../controllers/index');

router.get('/', baseController.getName);

router.use('/contacts', require('./contacts'));

module.exports = router;