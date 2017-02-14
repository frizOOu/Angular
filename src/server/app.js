'use strict';
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
mongoose.set('debug', true);
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
//req.body ne retourne que string car le type en attribut défini déclare le type d'input,
//et non le type de variable, pour ce faire il faut utiliser la fonction ci-dessous.
function getInputType(value) {
  if(value === "")
      return "";
  else if(value === "true" || value === "false")
      return "boolean";
  else if(!Number.isNaN(Number(value)))
      return "number";
  else
      return typeof value;
}      

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
  app.post('/api/request', function(req, res){
    //On recupere les données et clés 
    if (req.body) {
      var keys = Object.keys(req.body);
      var values = keys.map(function(keys) {
        return req.body[keys];
      });
      var key;
      var value;
      var tabkey = [];
      //On boucle pour recuperer les clés.
      for (var i = 0; i < keys.length; i++) {
      //Key est la clé 
        key = keys[i];
        tabkey.push(keys[i]);
      }
      var tabval = [];
      //On boucle pour recuperer les valeurs.
      for (var j = 0; j < values.length; j++) {
      //Value est la valeur de ce que l'on a envoyé via l'input text
      // value === req.body.param[]
        value = values[j];
        tabval.push(values[j]);
      }
    }
    else{
      console.log('rien dans la requete!!!!');
    }
////////////////////////////////////////////////////////////////////////////////////////////
//  IMPORTANT                                                                             //
//  The solution in ES6 is to put the variable in square brackets in order to evaluate it.//
//  var key = "test"; myArray.push({ [key]: someValueArray });                            //
//                                                                                        //
//////////////////////////////////////////////////////////////////////////////////////////// 
    var val = getInputType(value)
    var currentkey;
    var currentval;
    for (var i = 0; i < tabkey.length; i++) {
      currentkey = tabkey[i];
    }
    for (var j = 0; j < tabval.length; j++) {
      currentval = tabval[j];
    }
    switch (val) {
        case 'string':
        // Querie and//////
          // model.find({[tabkey[0]] : tabval[0], [tabkey[1]] : tabval[1] }, function(err, obj){
          //   if(err) return console.error(err);
          //   res.status(200).json(obj);
          //   console.log(obj)
          // })
          // var testdate = tabval[0].toISOString();
          model.find({[tabkey[0]]: tabval[0]}, function(err, obj){
            if(err) return console.error(err);
            res.status(200).json(obj);
            console.log(obj)
          })
        break;
        case 'number':

          //Requetes pour les inputs de type number
          //Between////////
          // if (currentkey && tabval[i]) 
          // { 
          //   model.find({[tabkey[0]] : {$gt : tabval[0], $lt :tabval[1]}}, function(err, obj){
          //     if (err)return console.error(err);
          //     res.status(200).json(obj);
          //     console.log(obj);
          //   });
          // }
          // //Greater than///////
          // else if(tabval[0])
          // {
          //   model.find({[currentkey] : {$gt : currentval}}, function(err, obj){
          //     if(err) return console.error(err);
          //     res.status(200).json(obj);
          //     console.log(obj);
          //   });
          // }
          // //Lesser than ////////
          // else if(tabkey[1])
          // {
          //   model.find({[currentkey]: {$lt : currentval}}, function(err, obj){
          //     if(err) return console.error(err);
          //     res.status(200).json(obj);
          //     console.log(obj);
          //   });
          // }
        break;
    }
  })
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname,'/../../dist/index.html'));
  });
  app.listen(app.get('port'), function() {
    console.log('server is Up on port '+app.get('port'));
  });
});
module.exports = app;