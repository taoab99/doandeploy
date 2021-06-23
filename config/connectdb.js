const mongoose = require('mongodb');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/DOAN', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connect success ');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };