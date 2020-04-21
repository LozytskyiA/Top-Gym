import CreateUserDto from "../dto/user.dto";
import User from "../entities/user.entity";
import { getRepository } from "typeorm";

exports.createUser = (data: CreateUserDto) => {
  const newUser = getRepository(User).create(data);
  return getRepository(User).save(newUser);
}

exports.getAllUsers = () => getRepository(User).find();

exports.getUserById = (id: number) => getRepository(User).findOne(id);

exports.modifyUser = (id: number, userData: User) => {
  getRepository(User).update(id, userData);
  return getRepository(User).findOne(id);
}

exports.deleteUser = (id: number) => getRepository(User).delete(id);
