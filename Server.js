/**
 * Created by nikitaukolov on 21.02.16.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mogojs = require('mongojs');
var url = 'mongodb://95.28.93.215:24014/contactlist';
var db = mogojs(url, ['contactlist']);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function(req, res) {
    console.log('I received the GET request');
    db.contactlist.find(function(err, docs) {
        //console.log(docs);
        res.json(docs);
    });
});

app.post('/contactlist', function(req, res){
   console.log(req.body);
   db.contactlist.insert(req.body, function(err, doc){
       res.json(doc);
   });
});

app.listen(3000);
console.log('Server running on port 3000');