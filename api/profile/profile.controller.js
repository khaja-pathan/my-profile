'use strict';

const ProfileModel = require('./profile.model');
const sendRsp = require('../../util/response').sendRsp;
const moment = require('moment');

exports.create = (req, res) => {
  const { firstname, lastname, dob, email, phone, address} = req.body;
  const newProfile = new ProfileModel({
    firstName : firstname,
    lastName : lastname,
    dob : moment(dob, "DD/MM/YYYY"),
    email : email,
    phone : phone,
    address : address
  });
    
  newProfile.save((err, resp)=> {
    if(err) console.log(err);
    res.status(200).json(resp, 200, "Profile created successfully");
  })

};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};
