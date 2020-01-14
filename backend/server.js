const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config();

const app = express()
const port = process.env.PORT
const db_uri = process.env.DB_URI

app.use(cors())
app.use(express.json())

mongoose.connect(db_uri, {useNewUrlParser: true, useCreateIndex: true})
const mongoose_connection = mongoose.connection;
mongoose_connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const defaultRouter = require('./routes/default')
app.use('/',defaultRouter)

app.listen(port, () => { 
    console.log(`The server is running on port: ${port}`)
})