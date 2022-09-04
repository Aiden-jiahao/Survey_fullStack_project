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
   async(accessToken,refreshToken, profile, done)=>{
        console.log('access token',accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile:', profile);

        const existingUser=await User.findOne({googleId:profile.id})
            if(existingUser){
                //we already have a record of Id. so we call done method 
                done(null,existingUser);
            }else{
                // we wanna create a new user.
                const user= await new User ({ googleId: profile.id }).save()//and save() will save the data into mogodb
                // this creates a new instacne of user
                done(null, user); 
                }
    }
));