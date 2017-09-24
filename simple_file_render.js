var express = require("express");
var app     = express();
app.use(express.static(__dirname + '/Templates'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/Static'));
//Store all JS and CSS in Scripts folder.

app.get('/',function(req,res){
  res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
});

app.get('/about',function(req,res){
  res.sendFile('/about.html');
});

app.get('/sitemap',function(req,res){
  res.sendFile('/sitemap.html');
});

app.listen(8088);

console.log("Running at Port 8088");
