'use strict';

var utils = require('../utils/writer.js');
var Products = require('../service/ProductsService');

module.exports.productsGET = function productsGET (req, res, next, id, name, url_image, price, discount, category) {
  Products.productsGET(id, name, url_image, price, discount, category)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsidGET = function productsidGET (req, res, next, id, name, url_image, price, discount, category) {
  Products.productsidGET(id, name, url_image, price, discount, category)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
