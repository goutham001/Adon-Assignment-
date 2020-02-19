const fs = require('fs');
const jwt = require('jsonwebtoken');
const path = require('path');
const { algorithm, audience, expiration, issuer } = require('../security/jwt.utils')

var privateKEY = fs.readFileSync(path.resolve('security/private.key'), 'utf8');
var publicKEY = fs.readFileSync(path.resolve('security/public.key'), 'utf8');

module.exports = {
    sign: (payload, $Options) => {
        var signOptions = {
            issuer: issuer,
            subject: $Options.subject,
            audience: audience,
            expiresIn: expiration,
            algorithm: algorithm
        };
        return jwt.sign(payload, privateKEY, signOptions);
    },
    verify: (token, $Option) => {
        var verifyOptions = {
            issuer: issuer,
            subject: 'test',
            audience: audience,
            expiresIn: expiration,
            algorithm: [algorithm]
        };
        try {
            return jwt.verify(token, publicKEY, verifyOptions);
        } catch (err) {
            return false;
        }
    },
    decode: (token) => {
        return jwt.decode(token, { complete: true });

    }
}