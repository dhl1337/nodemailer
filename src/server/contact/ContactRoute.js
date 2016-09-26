var ContactController = require('./ContactController');

module.exports = function (app) {
    app.post('/send', ContactController.send);
};
