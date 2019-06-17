const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  home_phone: {
    type: String,
    required: true
  },
  buisness_phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  joining_date: {
    type: Date,
    required: true
  },
  region_name: {
    type: String,
  },
  city_name: {
    type: String,
  },
  district_name: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  pin: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  user_role: {
    type: String,
    required: true,
  },
  manager_name: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  is_active: {
    type: Boolean,
  }
});

module.exports = User = mongoose.model('users', UserSchema);
