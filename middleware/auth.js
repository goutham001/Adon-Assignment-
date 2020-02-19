const { verify } = require('../services/jwt.service');
var request = require('request');

function tokenVerification(req, res, next) {
    if (verify(req.headers.authorization)) {
        req.verifiedToken = verify(req.headers.authorization)
        next()
    } else {
        res.status(401)
        res.send('token error').end()
    }
}

function authorize(roles = []) {

    return [
        async(req, res, next) => {
            var options = {
                method: 'POST',
                body: roles,
                json: true,
                url: 'http://localhost:8082/auth',
                headers: req.headers
            };
            await request(options, (err, req1, res1, body) => {
                if (err) {
                    console.log('err posting json: ', err);
                    throw err;
                } else if (res1)
                    next()
                else
                    res.send('unauthorize');

            })
        }
    ];
};

module.exports = { authorize, tokenVerification };