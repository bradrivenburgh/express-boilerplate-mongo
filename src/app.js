require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { morganOptions } = require('./config');
const errorHandler = require('./utils/errorHandler');
const exampleRouter = require('./routes/exampleRoute');

const app = express();

app.use(morgan(morganOptions));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/example', exampleRouter)
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Welcome to the EXAMPLE API!');
});


module.exports = app;
