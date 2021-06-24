const express = require('express')
const mongoose = require('mongoose');
const connectdb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/DOAN',
            {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            })
            .then(x => {
                console.log(`connected "${x.connections[0].name}"`)
            })
            .catch(err => {
                console.error('eror', err);
            })
    } catch (error) {
        console.log(error.message);
    }
}

connectdb();


const app = express()
const port = process.env.PORT || 3000

const route = require('./router/index');



route(app);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})