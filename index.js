var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multiparty = require('connect-multiparty');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;
var router = express.Router();

app.use('/api', router);
app.use('/enviadas', express.static(__dirname + '/uploads'));

router.route('/upload')
  .post(multiparty(), require('./controllers/upload'));

app.listen(port);

console.log('conectado a porta' + port);
