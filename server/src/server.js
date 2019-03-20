// System Requirements
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MongoClient = require('mongodb').MongoClient;


const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/statistic', (req, res) => { 
  db.collection('statistic').find().toArray(function(err, result) {
    if (err) {
      throw err;
    }
    res.send({
    data: data
     }) 
  });
  // Stat.find({}, (data, err) => {
  //   console.log(data);
  //   res.send({
  //     data: data
  //   }) 
  // })
})

/*const model = new Schema({ timestamp: Number, totalCount: Number, fetchedCount: Number });
const Stat = mongoose.model("statistic", model);

mongoose.connect('mongodb://localhost:27017/crawler');
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});*/
var database = {};
MongoClient.connect('mongodb://localhost:27017/crawler', function(err, dbConnection) {
  if (err) {
    throw err;
  }
  database = dbConnection.db();
});

app.listen(process.env.PORT || 8081)