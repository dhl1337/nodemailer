var nodemailer = require('nodemailer');
var config = require('../configs/config');
module.exports = {
    send: function (req, res) {
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: config.email.username,
                pass: config.email.password
            }
        });
        var mailOptions = {
            from: 'Dan Le '+config.email.username+'',
            to: 'dhl1337@gmail.com',
            subject: 'hello',
            text: 'You have a new message',
            html: '<p>Html stuff</p>'
        };

        transporter.sendMail(mailOptions, function (err, info) {
            err ? console.log(err) : console.log(info);
        });
    }
};