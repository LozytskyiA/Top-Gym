import * as express from 'express';
import UserNotFoundException from "../exceptions/UserNotFoundException";
const Programs = require('../services/program.service');

exports.createProgram = async (request: express.Request, response: express.Response) => {
  const id = request.params.id;
  response.send(await Programs.createProgram(request.body, id));
}

exports.getAllPrograms = async (request: express.Request, response: express.Response) => {
  response.send(await Programs.getAllPrograms());
}

exports.getProgramById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
  const id = request.params.id;
  const program = await Programs.getProgramById(id);
  if (program) {
    response.send(program);
  } else {
    next(new UserNotFoundException(id));
  }
}

exports.modifyProgram = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
  const id = request.params.id;
  const updatedUser = await Programs.modifyProgram(id, request.body);
  if (updatedUser) {
    response.send(updatedUser);
  } else {
    next(new UserNotFoundException(id));
  }
}

exports.deleteProgram = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
  const id = request.params.id;
  const deleteResponse = await Programs.deleteProgram(id);
  if (deleteResponse.raw[1]) {
    response.sendStatus(200);
  } else {
    next(new UserNotFoundException(id));
  }
}
