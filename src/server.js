const app = require('./app');
const { PORT, DATABASE_URL } = require('./config');
const mongoose = require('mongoose');

// TODO: Connect to database
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
// Log connection success or error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongodDB instance');
});
// Make the database available to app
app.set('db', db);

// Listen
app.listen(PORT, () =>
  console.log(`Server is listening at http://localhost:${PORT}`)
);
