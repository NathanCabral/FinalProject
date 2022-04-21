const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const path = require('path');
const { nextTick } = require('process');
var app = express();

app.set('port', 8081);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));


const server = app.listen(app.get('port'), function() {
    console.log('The server is running on: ' + app.get('port'));
});