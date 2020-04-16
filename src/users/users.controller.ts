import * as express from 'express';
import { getRepository } from 'typeorm';
import PostNotFoundException from '../exceptions/PostNotFoundException';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateUserDto from './user.dto';
import User from './user.entity';

class UsersController implements Controller {
  public path = '/users';
  public router = express.Router();
  private postRepository = getRepository(User);

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(this.path, validationMiddleware(CreateUserDto), this.createPost);
    this.router.get(this.path, this.getAllPosts);
    this.router.get(`${this.path}/:id`, this.getPostById);
    this.router.patch(`${this.path}/:id`, validationMiddleware(CreateUserDto, true), this.modifyPost);
    this.router.delete(`${this.path}/:id`, this.deletePost);
  }

  private createPost = async (request: express.Request, response: express.Response) => {
    const userData: CreateUserDto = request.body;
    const newUser = this.postRepository.create(userData);
    await this.postRepository.save(userData);
    response.send(newUser);
  }

  private getAllPosts = async (request: express.Request, response: express.Response) => {
    const users = await this.postRepository.find();
    response.send(users);
  }

  private getPostById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const user = await this.postRepository.findOne(id);
    if (user) {
      response.send(user);
    } else {
      next(new PostNotFoundException(id));
    }
  }

  private modifyPost = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const userData: User = request.body;
    await this.postRepository.update(id, userData);
    const updatedUser = await this.postRepository.findOne(id);
    if (updatedUser) {
      response.send(updatedUser);
    } else {
      next(new PostNotFoundException(id));
    }
  }

  private deletePost = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const deleteResponse = await this.postRepository.delete(id);
    if (deleteResponse.raw[1]) {
      response.sendStatus(200);
    } else {
      next(new PostNotFoundException(id));
    }
  }
}

export default UsersController;
