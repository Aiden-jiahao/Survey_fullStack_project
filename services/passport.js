const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const mongoose=require('mongoose');
const keys=require('../config/keys.js');


// for mongoose, we dont use require.
const User=mongoose.model('users');

passport.serializeUser( (user, done)=>{
    done (null, user.id);
});

passport.deserializeUser((id, done)=>{
    User.findById(id).
        then(user=>{
            done(null, user); 
    })
});
``
passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true,
    },
    (accessToken,refreshToken, profile, done)=>{
        console.log('access token',accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile:', profile);

        User.findOne({googleId:profile.id}).then((existingUser)=>{
            if(existingUser){
                //we already have a record of Id. so we call done method 
                done(null,existingUser);
            }else{
                // we wanna create a new user.
                new User ({ googleId: profile.id })// this creates a new instacne of user
                .save()//and save() will save the data into mogodb
                .then(user =>done(null, user)); 
            }
        })
    }
));