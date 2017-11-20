var {mongoose} = require('./../db/mongoose');
var {Label} = require('./../models/label');

var labelController = {};

labelController.addLabel = [
  function(req,res,next) {
    var label = new Label({
      title: req.body.title
    });

    label.save().then((doc) => {
      res.send(doc);
    }, (e) => {
        console.log(e)
      res.status(400).send(e);
    });
  }
];

labelController.getLabel = [
  function(req,res,next) {
    Label.find().then((label) => {
      res.send({label})
    }, (e) => {
      res.status(400).send(e);
    });
  }
];

module.exports = labelController;