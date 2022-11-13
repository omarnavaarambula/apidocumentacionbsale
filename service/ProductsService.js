'use strict';


/**
 * Permite obtener todos los productos de la API
 *
 * id Integer IDentificacion del producto (optional)
 * name String Nombre del producto (optional)
 * url_image String URL de la imagen (optional)
 * price Float Precio del Producto (optional)
 * discount Integer Descuento del Producto (optional)
 * category Integer Categoria del Producto (optional)
 * no response value expected for this operation
 **/
exports.productsGET = function(id,name,url_image,price,discount,category) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Permite obtener el ID de el Producto que contiene la API
 *
 * id Integer IDentificacion del producto (optional)
 * name String Nombre del producto (optional)
 * url_image String URL de la imagen (optional)
 * price Float Precio del Producto (optional)
 * discount Integer Descuento del Producto (optional)
 * category Integer Categoria del Producto (optional)
 * no response value expected for this operation
 **/
exports.productsidGET = function(id,name,url_image,price,discount,category) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

