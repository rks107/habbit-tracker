const User = require('../models/users');

module.exports.profile = function(req, res) {
    
    return res.render('user_profile',{
        title:"users profile"
    });
}

// render the Sign Up
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: 'Htracker | Sign Up'
    })
}

// render the Sign In page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title: 'Htracker | Sign In'
    })
}

// get sign up data
module.exports.create = function(req, res) {
    
    User.findOne({email: req.body.email}, function(err, user){
        if(err){ console.log("Error in finding user in signing up"); return;}

        if(!user) {
            User.create(req.body, function(err, user){
                if(err) {console.log("Error in createing user while signing up"); return;}

                res.redirect('/');
            });
        } else {
            res.redirect('back');
        }
    });
}

// sign in and create session
module.exports.createSession = function(req, res) {
    // todo later
}