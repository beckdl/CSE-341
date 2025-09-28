const getName = (req, res) => {
  res.send('Hello, welcome to the Contacts API. To get all contacts, navigate to /contacts.');
}

module.exports = {getName};