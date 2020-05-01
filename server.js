//server.js
const express = require('express');
// const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
// app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'assets'))); //new, not sure if correct
app.use(express.static(path.join(__dirname, 'static'))); //new, not sure if correct
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('build/*', function (req, res) {
  res.sendFile(path.join(__dirname,'index.html'));
});
app.listen(port);