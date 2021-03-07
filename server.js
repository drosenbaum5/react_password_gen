const express = require("express");
const path = require("path");
const cors = require('cors');
const PORT = process.env.PORT || 3001;
require('dotenv').config();
const cookieParser = require('cookie-parser');
const app = express();

const auth_routes = require('./routes/user_routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors());
app.use(cookieParser());

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
