const bcrypt = require('bcrypt');

module.exports = {
    encrypt: (plainText) => {
        return bcrypt.hashSync(plainText, 10)
    },
    validate: (plainText, hashText) => {
        if (bcrypt.compareSync(plainText, hashText))
            return true;
        else
            return false
    }
}