const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
mongoose.set('bufferCommands', false);

const Accounts = new Scheme({
    email: { type: String, require: true, },
    password: { type: String, require: true },
    cart: { type: Array, }
}, {
    timestamps: true,
    bufferCommands: false,
    bufferTimeoutMS: 1000
});

module.exports = mongoose.model('Accounts', Accounts);
