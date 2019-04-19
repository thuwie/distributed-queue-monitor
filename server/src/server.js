// System Requirements
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const MongoClient = require('mongodb').MongoClient;
let db = {};

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

const history = require('connect-history-api-fallback');
const { resolve } = require('path');

const publicPath = resolve(__dirname, '../dist');
const staticConf = { maxAge: '1y', etag: false };

app.use(express.static(publicPath, staticConf));
app.use('/', history());

app.get('/statistic', (req, res) => {
  db.collection('statistic').find().toArray(function (err, data) {
    if (err) {
      throw err;
    }
    res.send({
      statistic: data
    })
  });
});

const services = process.env.VCAP_SERVICES ? JSON.parse(process.env.VCAP_SERVICES) : null;
let url = null;
let dbName = null;

if (services) {
  url = services.mongodb[0].credentials.uri;
  dbName = services.mongodb[0].credentials.dbname;
}


MongoClient.connect(url || 'mongodb://192.168.99.100:27017/crawler', function (err, dbConnection) {
  if (err) {
    throw err;
  }
  db = dbConnection.db();
  console.log("Connection Succeeded. App on the :8081.");
  app.listen(process.env.PORT || 8081);
});

