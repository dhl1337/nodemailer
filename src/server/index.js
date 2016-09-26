var bodyParser = require('body-parser'),
    express = require('express'),
    port = 3000,
    app = express();

app.use(bodyParser.json());
require('./contact/ContactRoute')(app);

app.listen(port, function () {
    console.log('listening on port ' + port)
});