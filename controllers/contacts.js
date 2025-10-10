const mongodb = require('../db/conn');
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async (req, res) => {
    try {
      const result = await mongodb.getDb().db('CSE341').collection('Contacts').find();
      result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      })
    } catch(err) {
      res.status(500).json({ message: err.message });
    }
  };

const getSingleContact = async (req, res) => {
    try {
      const userId = new ObjectId(req.params.id);
      const result = await mongodb.getDb().db('CSE341').collection('Contacts').find({ _id: userId });
      result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
      })
    } catch(err) {
      res.status(500).json({ message: err.message });
    }
  };

const createNewContact = async (req, res) => {
    try {
      const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
      };
      const response = await mongodb.getDb().db('CSE341').collection('Contacts').insertOne(contact);
      if (response.acknowledged) {
        res.status(201).json(response);
      } else {
        res.status(500).json(response.error || 'Some error occurred while creating the contact.');
      }
    } catch(err) {
      res.status(500).json({ message: err.message });
    }
  };

const updateExistContact = async (req, res) => {
    try {
      const userId = new ObjectId(req.params.id);
      const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
      };
      const response = await mongodb.getDb().db('CSE341').collection('Contacts').replaceOne({ _id: userId }, contact);
      if (response.modifiedCount > 0) {
        res.status(204).send();
      } else {
        res.status(500).json(response.error || 'Some error occurred while updating the contact.');
      }
    } catch(err) {
      res.status(500).json({ message: err.message });
    }
  };

const deleteExistContact = async (req, res) => {
    try {
      const userId = new ObjectId(req.params.id);
      const response = await mongodb.getDb().db('CSE341').collection('Contacts').deleteOne({ _id: userId }, true);
      if (response.deletedCount > 0) {
        res.status(200).send();
      } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
      }
    } catch(err) {
      res.status(500).json({ message: err.message });
    }
  };

module.exports = { getAllContacts, getSingleContact, createNewContact, updateExistContact, deleteExistContact };
