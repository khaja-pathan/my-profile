'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  firstName: String,
  lastName: String,
  dob: Date,
  email: String,
  phone: Number,
  address: String
});

const ProfileModel = mongoose.model('Profile', ProfileSchema);
module.exports = ProfileModel;
