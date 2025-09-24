const express = require('express');
const app = express();
const routes = require('./routes');
const env = require('dotenv').config();
const PORT = process.env.PORT || 3000;
const {MongoClient} = require('mongodb');

// *****************************************

async function main() {
  const uri = process.env.DATABASE_URL;
  
  const client = new MongoClient(uri);

  try {
    await client.connect();

    console.log("Connected to MongoDB");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

//******************************************

main().catch(console.error);

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});