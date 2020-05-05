import * as express from 'express';
import User from '../entities/user.entity';
import UserNotFoundException from "../exceptions/UserNotFoundException";
const passport = require('passport');
const Auth = require('../services/auth.service');

exports.authentication = (request: express.Request, response: express.Response, next: express.NextFunction) => {
  passport.authenticate('local', {session: false}, (error, user: User) => {
    if (error) {
      return next(error);
    }
    if (!user) {
      return response.sendStatus(401);
    }
    request.logIn(user, function (error) {
      if (error) {
        return next(error);
      }
      request.session.save(() => response.send(`/users/${user.id}`));
    });
  })(request, response, next);
}

exports.userLogOut = (request: express.Request, response: express.Response) => {
  request.logOut();
  response.redirect('/')
}

exports.getAuthUser = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
  const id = request.session.passport ? request.session.passport.user : null;
  if(id) {
    const user = await Auth.getAuthUser(id);
    if (user) {
      response.send({
        name: user.name,
        last_name: user.last_name,
        email: user.email,
        role: user.role
      });
    } else {
      next(new UserNotFoundException(id));
    }
  } else {
    response.sendStatus(401);
  }
}