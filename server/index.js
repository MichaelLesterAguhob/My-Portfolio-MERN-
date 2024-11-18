const express = require('express');
const mongoose  = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const corsOption = ({
    origin: ['http://localhost:8000', 'http://localhost:3000'],
    credentials: true,
    optionsSuccessStatus: 200
})
app.use(cors(corsOption))

mongoose.connect(process.env.MONGODB_STRING);
mongoose.connection.once('open', () => {console.log('Successfully connected to database')})

const userRoutes = require('./routes/user');
const projectRoutes = require('./routes/project');
const postRoutes = require('./routes/post');

app.use('/users', userRoutes);
app.use('/projects', projectRoutes);
app.use('/posts', postRoutes);



app.listen(process.env.PORT, () => {console.log(`Running on PORT: ${process.env.PORT}`)})
module.exports = {app, mongoose}