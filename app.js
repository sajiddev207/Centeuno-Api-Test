const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
dotenv.config()
const PORT = process.env.PORT;
const path = require('path');
const errorHandler = require('./utils/errorHandler')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
let { controllerUser } = require('./router')
app.use('/api/products/', controllerUser)
app.use(errorHandler);
app.listen(PORT, () => {
    console.log('Server running on Port', process.env.PORT);
})
