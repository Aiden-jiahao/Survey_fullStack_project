const express = require('express');
const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const keys=require('./config/keys.js');

const app = express();
// Client ID : 430676151483-f3pk8o3ccu1dekmc0gaufmcqhrfu98de.apps.googleusercontent.com 
// Client secret: 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   
passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
    },
    (accessToken,refreshToken, profile, done)=>{
        console.log('access token',accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile:', profile);
        
    }
));

//add a route handler: 
app.get(
    '/auth/google', 
    passport.authenticate('google',{
    scope: ['profile', 'email']
})); 

app.get('/auth/google/callback',passport.authenticate('google')); 

const PORT=process.env.PORT || 5000;
app.listen(PORT);

// app.listen (5000);  this is to run the project on site
// on command line , node index.js   