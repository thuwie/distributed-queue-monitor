// System Requirements
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/statistic', (req, res) => {
  data.find({}, function(err, data) { console.log(err, data, data.length); });
  if (error) { console.error(error); }
  data.find({}, (data, error) => {
    console.log(data);
    res.send({
      data: data
    })
  })
})

let data = {};
mongoose.connect('mongodb://localhost:27017/crawler');
mongoose.model('statistic', new Schema({ timestamp: Number, totalCount: Number, fetchedCount: Number }));
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
  data = mongoose.model('statistic');
});

app.listen(process.env.PORT || 8081)