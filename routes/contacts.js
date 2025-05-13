const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find(); // Fetch all contacts
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching contacts', error: err });
  }
});

fetch('/contacts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching contacts:', error));

module.exports = router;