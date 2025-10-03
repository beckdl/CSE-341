const router = require('express').Router();
const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAllContacts);
router.get('/:id', contactsController.getSingleContact);
router.post('/', contactsController.createNewContact);
router.put('/:id', contactsController.updateExistContact);
router.delete('/:id', contactsController.deleteExistContact);

module.exports = router;