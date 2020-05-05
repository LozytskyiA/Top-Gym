import CreateUserDto from "../dto/user.dto";
import User from "../entities/user.entity";
import { getRepository } from "typeorm";

exports.getAuthUser = (id: number) => getRepository(User).findOne({id: id});