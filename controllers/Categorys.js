'use strict';

var utils = require('../utils/writer.js');
var Categorys = require('../service/CategorysService');

module.exports.categorysGET = function categorysGET (req, res, next, id, name) {
  Categorys.categorysGET(id, name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categorysidGET = function categorysidGET (req, res, next, id, name) {
  Categorys.categorysidGET(id, name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
