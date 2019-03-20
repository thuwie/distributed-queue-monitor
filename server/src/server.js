// System Requirements
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const MongoClient = require('mongodb').MongoClient;
var db = {};

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/statistic', (req, res) => { 
  db.collection('statistic').find().toArray(function(err, data) {
    if (err) {
      throw err;
    }
    res.send({
    statistic: data
     }) 
  });
})

MongoClient.connect('mongodb://localhost:27017/crawler', function(err, dbConnection) {
  if (err) {
    throw err;
  }
  db = dbConnection.db();
  console.log("Connection Succeeded. App on the :8081.");
  app.listen(process.env.PORT || 8081)
});

