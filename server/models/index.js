const db = require('../../database')

module.exports = {
  getAll: function (callback) {
    var queryStr = 'SELECT * FROM groceries';

    db.query(queryStr, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        // console.log('test');
        callback(err, data);
      }
    });
  },

  create: function (params, callback) {
    var queryStr = 'INSERT INTO groceries(item, quantity) values (?, ?)';

    db.query(queryStr, params, (err, data) => {
      // handle errer
      if (err) {
        console.log(err);
      // send responds to client
      } else {
        callback(err, data);
      }
    });
  },

  edit: function (params, callback) {
    var queryStr = `UPDATE groceries SET quantity=${params[0]} WHERE id=${params[1]}`;

    db.query(queryStr, params, (err, data) => {
      // handle errer
      if (err) {
        console.log(err);
      // send responds to client
      } else {
        callback(err, data);
      }
    });
  },

  delete: function (id, callback) {
    var queryStr = `DELETE FROM groceries WHERE id=?`;

    db.query(queryStr, [id], (err, data) => {
      // handle errer
      if (err) {
        console.log(err);
      // send responds to client
      } else {
        callback(err, data);
      }
    });
  }

};

