'use strict';
// var loopback = require('loopback')
var express = require('express');
var app = express();
var router = express.Router();
// var expressJWT = require('express-jwt');

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

/*
 *API
 *
 *
 */

 db.on('error', console.error.bind(console, 'connection error:'));

 db.once('open', function() {

  console.log('Connected to MongoDB');
  // app.post('/api/find', function(req, res){


  //   model.find({param10:req.body.param10}, function(err, docs) {

  //     console.log("On line 47 :"+req.body);

  //     if (err) return console.error(err);

  //     res.json(docs);

  //     console.log(docs);
  //   });
  // });

/*
 * Get type of model param
 *
 */
 model.schema.eachPath(function(path, type, error) {

  // if (error) return console.error(error);
    // console.log(type.instance)

    if (type.instance === "Number") {

      if (type != "_v" || type != "ObjectId") {
        let arr = [];
        arr.push(type.instance);
        console.log(arr.splice());
        // arr.splice(-1, 1);
        // console.log(type.instance);
        // console.log(arr);
      }
        
    }
    // else if(type.instance === "String"){
    //   if (type != "_v" || type != "ObjectId") {
    //     console.log(type.instance)
    //   }
    // }
    // else if(type.instance === "Date"){
    //   if (type != "_v" || type != "ObjectId") {
    //     console.log(type.instance)
    //   }      
    // }
  })


//  app.get('/api/get-type', function(req, res){
//   model.schema.eachPath(function(path, type, error) {

//   // if (error) return console.error(error);
//     // console.log(type.instance)

//     if (type.instance === "Number") {
//       if (path === "_v" || path === "ObjectId") {
//         console.log(type.instance)
//       }
        
//     }
//     else if(type.instance === "String"){
//       // console.log(type.instance)
//     }
//     else if(type.instance === "Date"){
//       // console.log(type.instance);
//     }
//   })
// })


  // all other routes are handled by Angular
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname,'/../../dist/index.html'));
  });
  app.listen(app.get('port'), function() {
    console.log('server is Up on port '+app.get('port'));
  });
});

 module.exports = app;