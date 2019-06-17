const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const User_Role_Schema = new Schema({
  user_role: {
    type: String,
    required: true
  },
  can_access_bu: {
    type: Boolean,
    required:true
  },
  can_access_city: {
    type: Boolean,
    required:true
  },
  can_access_company: {
    type: Boolean,
    required:true
  },
  can_access_country: {
    type: Boolean,
    required:true
  },
  // can_access_customer: {
  //   type: Boolean,
  //   required:true
  // },
  can_access_district: {
    type: Boolean,
    required:true
  },
  // can_access_product: {
  //   type: Boolean,
  //   required:true
  // },
  can_access_region: {
    type: Boolean,
    required:true
  },
  can_access_therapy: {
    type: Boolean,
    required:true
  },
  can_access_users: {
    type: Boolean,
    required:true
  },
});

module.exports = User_Role = mongoose.model('user_role', User_Role_Schema);
