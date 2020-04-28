import * as express from 'express';
import User from '../entities/user.entity';
const passport = require('passport');

exports.authentication = (request: express.Request, response: express.Response, next: express.NextFunction) => {
  passport.authenticate('local', (error, user: User) => {
    if (error) {
      return next(error);
    }
    if (!user) {
      return response.redirect('/login');
    }
    request.logIn(user, function (error) {
      if (error) {
        return next(error);
      }
      return response.redirect('/users');
    });
  })(request, response, next);
}
