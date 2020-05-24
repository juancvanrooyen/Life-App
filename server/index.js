const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000; // - process.env.PORT is needed for Heroku deployment
const tasks = require('./routes/api/tasks');
// const cors = require('cors');
mongoose.set('useFindAndModify', false);

// bodyParser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('../config/keys').mongoURI;
console.log("DB: " + db);

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo Connected"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Use Routes
app.use('/api/tasks', tasks);

app.listen(port, () => console.log(`Server running on port ${port}`));
