const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000; // - process.env.PORT is needed for Heroku deployment
const tasks = require('./routes/api/tasks');
const path = require('path');

mongoose.set('useFindAndModify', false);

// bodyParser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo Connected"))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/tasks', tasks);

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
