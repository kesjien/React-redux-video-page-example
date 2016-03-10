var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/client'));

app.get('/index', function(req, res){
  res.redirect('/index.html');
});

app.get('/dendi', function (req, res) {
  res.send('DENDIMOOOON!');
});
var server = app.listen(80);