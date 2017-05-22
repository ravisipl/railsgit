/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require('bcrypt');
module.exports = {
  tableName: 'users',  
  attributes: {
        firstName: {
            type: 'string',
        },
        lastName: {
            type: 'string',
        },
        email: {
            type: 'string',
            required: true,
            unique: true
        },
        passwordConfirmation: {
            type: 'string',
            required: true
        }
        
  },

};


