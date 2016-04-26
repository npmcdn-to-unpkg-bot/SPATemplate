var express = require('express');
var fallback = require('express-history-api-fallback')
var morgan = require('morgan');
var app = express();

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.set('view engine', 'ejs');
app.set('views', 'public');

app.use(morgan('combined'));
app.use(express.static('public'));
app.use(fallback('index.html', { root: './public' }))

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(server_port ,server_ip_address, function () {
  console.log('App running on ' + server_ip_address + ' : ' + server_port);
});
