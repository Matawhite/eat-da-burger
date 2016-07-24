var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var handlebars = require('express-handlebars');
var routes = require('./controllers/burgers_controller.js');

var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride('_method'));
app.engine('handlebars', handlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//test route
app.get('/', function(req, res){
  res.send('Working!')
})

//route for poduction
// app.use('/', routes);

app.listen(process.env.PORT||3000);
