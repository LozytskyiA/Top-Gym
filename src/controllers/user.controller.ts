import * as express from 'express';
import CreateUserDto from "../dto/user.dto";
import PostNotFoundException from "../exceptions/PostNotFoundException";
import User from "../entities/user.entity";
import { getRepository } from "typeorm";

exports.createUser = async (request: express.Request, response: express.Response) => {
  const postRepository = getRepository(User);
  const userData: CreateUserDto = request.body;
  const newUser = postRepository.create(userData);
  await postRepository.save(userData);
  response.send(newUser);
}

exports.getAllUsers = async (request: express.Request, response: express.Response) => {
  const postRepository = getRepository(User);
  const users = await postRepository.find();
  response.send(users);
}

exports.getUserById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
  const postRepository = getRepository(User);
  const id = request.params.id;
  const user = await postRepository.findOne(id);
  if (user) {
    response.send(user);
  } else {
    next(new PostNotFoundException(id));
  }
}

exports.modifyUser = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
  const postRepository = getRepository(User);
  const id = request.params.id;
  const userData: User = request.body;
  await this.postRepository.update(id, userData);
  const updatedUser = await postRepository.findOne(id);
  if (updatedUser) {
    response.send(updatedUser);
  } else {
    next(new PostNotFoundException(id));
  }
}

exports.deleteUser = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
  const postRepository = getRepository(User);
  const id = request.params.id;
  const deleteResponse = await postRepository.delete(id);
  if (deleteResponse.raw[1]) {
    response.sendStatus(200);
  } else {
    next(new PostNotFoundException(id));
  }
}
