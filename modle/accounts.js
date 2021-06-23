const MongoClient = require('mongodb').MongoClient;
const Scheme = MongoClient.Schema;
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

module.exports = MongoClient.model('Accounts', Accounts);
