const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const secret = require('./config/config').secret;
const { User } = require('./models');

passport.use(
    new JwtStrategy(
        {
            jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: secret
        },
        (payload, done) => {
            User.find({
                where: {
                    id: payload.id
                }
            })
                .then(user => {
                    if (user) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                })
                .catch(error => done(error, false));
        }
    )
);
