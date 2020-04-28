import CreateUserDto from "../dto/user.dto";
import User from "../entities/user.entity";
import { getRepository } from "typeorm";
const bcrypt = require('bcrypt');

exports.createUser = async (data: CreateUserDto) => {
  const newUser = getRepository(User).create({
    ...data,
    password_salt: await bcrypt.hash(data.password_salt, 10),
  });
  return getRepository(User).save(newUser);
}

exports.getAllUsers = () => getRepository(User).find();

exports.getUserById = (id: number) => getRepository(User).findOne({id: id});

exports.modifyUser = async (id: number, userData: User) => {
  await getRepository(User).update(id, userData);
  return getRepository(User).findOne({id: id});
}

exports.getUserByEmail = (email: string) => getRepository(User).findOne({email: email});

exports.deleteUser = (id: number) => getRepository(User).delete(id);
