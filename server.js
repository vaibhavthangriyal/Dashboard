const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
//const path = require('path');
var cors = require('cors')

const bu = require('./routes/api/bu');
const city = require('./routes/api/city');
const company = require('./routes/api/company');
const country = require('./routes/api/country');
const customers = require('./routes/api/customer');
const district = require('./routes/api/district');
const products = require('./routes/api/products');
const region = require('./routes/api/region');
const therapy = require('./routes/api/therapy');
const users = require('./routes/api/users');


const app = express();
app.use(cors())
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/products', products);
app.use('/api/customers', customers);
app.use('/api/city', city);
app.use('/api/bu', bu);
app.use('/api/company', company);
app.use('/api/country', country);
app.use('/api/district', district);
app.use('/api/region', region);
app.use('/api/therapy', therapy);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
