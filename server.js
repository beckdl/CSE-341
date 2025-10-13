const express = require('express');
const app = express();
const contacts = require('./controllers/contacts');
const env = require('dotenv').config();
const PORT = process.env.PORT || 3000;
const mongodb = require('./db/conn');
const bodyParser = require('body-parser');

/*// *****************************************

async function main() {
  const uri = process.env.DATABASE_URL;
  
  const client = new MongoClient(uri);

  try {
    await client.connect();

    console.log("Connected to MongoDB");
  } catch (e) {
    console.error(e);
  }
}

//******************************************
*/

app
.use(bodyParser.json())
.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
//  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Z-Key');
//  res.setHeader('Content-Type', 'application/json');
//  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
})
.use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  }
});