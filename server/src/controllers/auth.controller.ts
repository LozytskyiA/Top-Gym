import * as express from 'express';
import User from '../entities/user.entity';
const passport = require('passport');

exports.authentication = (request: express.Request, response: express.Response, next: express.NextFunction) => {
  passport.authenticate('local', {session: false}, (error, user: User) => {
    if (error) {
      return next(error);
    }
    if (!user) {
      return response.send('Incorrect password!');
    }
    request.logIn(user, function (error) {
      if (error) {
        return next(error);
      }
      request.session.save(() => response.redirect('/users'));
    });
  })(request, response, next);
}

exports.userLogOut = (request: express.Request, response: express.Response) => {
  request.logOut();
  response.redirect('/')
}