const roles = require("../models/role.model")
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.getAll =(req, res)=>{
  roles.find().then(data =>{
    res.status(200).send(data)
  }).catch(err => {
    res.status(500).send("Could not find user", err)
    console.log("Error:"+ err)
  })
}