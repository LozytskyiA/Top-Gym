import * as express from 'express';
import UserNotFoundException from "../exceptions/UserNotFoundException";
const Users = require('../services/user.service');

exports.createUser = async (request: express.Request, response: express.Response) => {
  response.send(await Users.createUser(request.body));
}

exports.getAllUsers = async (request: express.Request, response: express.Response) => {
  response.send(await Users.getAllUsers());
}

exports.getUserById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
  const id = request.params.id;
  const user = await Users.getUserById(id);
  if (user) {
    response.send(user);
  } else {
    next(new UserNotFoundException(id));
  }
}

exports.modifyUser = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
  const id = request.params.id;
  const updatedUser = await Users.modifyUser(id, request.body);
  if (updatedUser) {
    response.send(updatedUser);
  } else {
    next(new UserNotFoundException(id));
  }
}

exports.deleteUser = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
  const id = request.params.id;
  const deleteResponse = await Users.deleteUser(id);
  if (deleteResponse.raw[1]) {
    response.sendStatus(200);
  } else {
    next(new UserNotFoundException(id));
  }
}

// exports.getUserByEmail = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
//   const email = request.params.email;
//   const user = Users.getUserByEmail(email);
//   return user;
// }
