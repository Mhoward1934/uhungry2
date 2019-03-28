const db = require("../models");
console.log("foodcontroller loaded")

// Defining methods for the foodController
module.exports = {
  findAll: function(req, res) {
    console.log("request")
    console.log(req)
    db.Food 
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Food
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log('New Food', req.body)
    db.Food
      .create(req.body)
      // .then(dbModel =>  res.json(dbModel))
      .then(dbModel =>  res.redirect("./food"))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Food
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Food
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
