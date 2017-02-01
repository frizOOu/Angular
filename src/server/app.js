'use strict';
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(__dirname + '/../../dist'), router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;
mongoose.Promise = global.Promise;


// Models
var model = require('../app/model/params.model.js');

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {

  console.log('Connected to MongoDB');

  app.get('/api/get-schema', function(req, res){
    var arr = [];
    model.schema.eachPath(function(path, object) {
      arr.push(object);
    })
    res.status(200).json(arr);
  })

  app.post('/api/get-string', function(req, res){
    
    // console.log(req.body.param1);

    model.find({"param1": req.body.param1}, function(err, obj){
      if(err) return console.error(err);
      res.json(obj);
      console.log(obj);

    })
  })






  // app.post('/api/get-number', function(req, res){
  //   model.find({})
  // })
  // app.post('/api/get-date', function(req, res){

  // })
  // app.get('/cat/:id', function(req, res) {
  //   db.objs.findOne({_id: req.params.id}, function(err, obj) {
  //     if(err) return console.error(err);
  //     res.json(obj);
  //   })
  // });

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname,'/../../dist/index.html'));
  });
  app.listen(app.get('port'), function() {
    console.log('server is Up on port '+app.get('port'));
  });
});

module.exports = app;