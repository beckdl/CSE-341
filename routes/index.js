const router = require('express').Router();
const contacts = require('./contacts');

router.use('/', require('./swagger.js'));

router.use('/contacts', contacts);

module.exports = router;