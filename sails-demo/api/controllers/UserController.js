/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
     getSignup: function(req, res,next) {
          res.view('user/signup');
    },	
    postSignup: function(req, res,next) {
    	  User.create(req.params.all()).exec(function (err, result){
			  res.send(req.headers);
			  if (err) {
              	res.send(err);
              }
              else{
                if(result.id){
               		res.send(result); 	
                }
                else{
                	res.send('There are some error'); 	
                }
              }
            });
          
      },	
};

