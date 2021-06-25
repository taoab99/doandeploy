const express = require('express')
const mongoose = require('mongoose');
const DATABASE_URL = "mongodb+srv://buikhactaodb:12345@cluster0.nuk9h.mongodb.net/connectdb?retryWrites=true&w=majority";


const connectdb = async () => {
    try {
        await mongoose.connect(DATABASE_URL,
            {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            })
            .then(x => {
                console.log(`connected ""`)
            })
            .catch(err => {
                console.error('eror', err);
            })
    } catch (error) {
        console.log('not connect');
        console.log(error.message);
    }
}

connectdb();


const app = express()
app.use(express.json());
const port = process.env.PORT || 3000

const route = require('./router/index');



route(app);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})