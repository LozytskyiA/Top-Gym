const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('./services/user.service');
const bcrypt = require('bcrypt');

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => done(null, Users.getUserById(id)));

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password_salt'
  },
  async (email, password, done) => {
    const user = await Users.getUserByEmail(email);

    if (!user) {
      return done(null, false, {
        message: 'No user with that email.'
      });
    }

    try {
      if (await bcrypt.compare(password, user.password_salt)) {
        return done(null, user)
      } else {
        return done(null, false, {
          message: 'Incorrect password.'
        })
      }
    } catch (error) {
      return done(error);
    }
  }
))
