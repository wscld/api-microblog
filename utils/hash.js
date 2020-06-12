const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

const compare = (password1, password2) => { bcrypt.compareSync(password1, password2) }
const hash = password => { bcrypt.hashSync(password, salt) }

module.exports = { compare, hash };