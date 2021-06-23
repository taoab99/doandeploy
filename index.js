const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const db = require('./config/connectdb');
const route = require('./router/index');

db.connect();

route(app);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})