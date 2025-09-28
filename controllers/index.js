const getName = (req, res) => {
  res.send('Hello,');
  res.send('Welcome to the Contacts API');
  res.send('To get all contacts, navigate to /contacts');
}

module.exports = {getName};