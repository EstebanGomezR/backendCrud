/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {type:'string', required:true},
    apellido: {type:'string', required:true},
    correo: {type:'string', required:true},
    edad: {type:'string', required:true},
  },

};

