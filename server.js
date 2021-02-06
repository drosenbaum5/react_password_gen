const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
require('dotenv').config()
const app = express();

const auth_routes = require('./routes/user_routes');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/password_gen', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

// -- Define API routes here -- //

app.get('/', (req, res) => {
  res.send("Home / Landing Route");
});

app.use('/api', auth_routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
