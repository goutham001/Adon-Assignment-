var path = require('path');
var multer = require('multer');
const { file } = require('../models/file');

module.exports = {
    async uploadFile(req, res) {
        var upload = await multer({
            storage: multer.diskStorage({
                destination: function (req, file, callback) {
                    callback(null, '/home/gautam/Desktop/adoninternet/resource/')
                },
                filename: function (req, file, callback) {
                    callback(null, Date.now() + path.extname(file.originalname))
                }
            })
        }).single('file');
        upload(req, res, (err) => {
            if (err instanceof multer.MulterError)
                res.send("MulterError: " + err)
            else if (err)
                res.send("File upload error: " + err)
            else
                file.create({
                    file_uri: '/home/gautam/Desktop/adoninternet/resource/' + (req.file.filename),
                    name: req.query.name
                })
                    .then(updatedfile => {
                        if (updatedfile)
                            res.send('success');
                        else
                            res.send('failed');
                    })
                    .catch(err => res.send(err));
        })
    }
}