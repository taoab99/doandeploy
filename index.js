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
        console.log('mongodb conneced');
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