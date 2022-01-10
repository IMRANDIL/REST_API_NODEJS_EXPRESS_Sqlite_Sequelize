const express = require('express');
require('dotenv').config();
const app = express();

const Router = require('./routes/Route');
const sequelize = require('./db/db');
// middleware..
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/', Router);




const PORT = process.env.PORT || 3000;


sequelize.sync().then((value) => {
    // console.log(value);
    app.listen(PORT, () => {
        console.log(`server is running on port: ${PORT}`);
    })
}).catch((err) => console.log(err));


