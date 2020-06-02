const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser'); - Deprecated. Testing for now. Edited "app.use" below.
const app = express();
const port = process.env.PORT || 5000; // - process.env.PORT is needed for Heroku deployment
const path = require('path');
const config = require('config');

mongoose.set('useFindAndModify', false);

// bodyParser Middleware
app.use(express.json());

// DB Config
const db = config.get('mongoURI');

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("Mongo Connected"))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/tasks', require('./routes/api/tasks'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

//Serve Statis Assets if in production
if (process.env.NODE_ENV === 'production'){
  // Set static folder
  //app.use(express.static('public'));
  app.use(express.static(path.join(__dirname, '/client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
  })
}

app.listen(port, () => console.log(`Server running on port ${port}`));
