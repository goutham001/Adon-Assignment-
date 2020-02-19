const { user } = require('../models/user');
const { encrypt, validate } = require('../services/crypto.service');
const { sign, decode, verify } = require('../services/jwt.service');
module.exports = {
    register(req, res) {
        user
            .create({
                "username": req.body.username,
                "password": encrypt(req.body.password),
                "gender": req.body.gender,
                "role": req.body.role
            })
            .then(user => {
                if (user)
                    res.send('user created successfully');
                else
                    res.send('failed');
            })
            .catch(err => res.send(err));
    },
    login(req, res) {
        console.log(req.body.username);
        user
            .findOne({ "username": req.body.username })
            .then(u => {
                console.log(u);
                if (u) {
                    if (validate(req.body.password, u.password)) {
                        let payload = {
                            username: u.username,
                            gender: u.gender,
                            role: u.role
                        };
                        // console.log('payload: ' + payload);
                        let token = sign(payload, { subject: 'test' })
                        res.send(token);
                    } else
                        res.send('wrong password');
                } else
                    res.send('wrong username');
            })
            .catch(err => res.send(err));
    }
}