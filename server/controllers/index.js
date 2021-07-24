var models = require('../models');

module.exports = {
  get: function (req, res) {
    // query groceries from db
    // respond to client with groceries

    models.getAll(function(err, data) {
      if (err) {
      // console.log('test1');
        console.log(err);
      } else {
      // console.log('test2');
        res.send(data);
      }
    });
  },

  post: function (req, res) {
    // create grocery to db
    console.log('request: ', req.body.item, req.body.quantity);

    var params = [req.body.item, req.body.quantity];

    models.create(params, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(201);
      }
    });
  },

  edit: function (req, res) {
    console.log("quantity: ", req.body.quantity, "id: ", req.params.id);
    // console.log('request: ', req.body.item, req.body.quantity);

    var params = [req.body.quantity, req.params.id];
    console.log(params);

    models.edit(params, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(201);
      }
    });
  },

  delete: function (req, res) {
    // create grocery to db
    // console.log('request: ', req.body.item, req.body.quantity);
    console.log(req.params);

    // var params = [req.params.id];

    models.delete(req.params.id, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(200);
      }
    });
  }

};