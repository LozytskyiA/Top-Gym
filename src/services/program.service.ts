import Program from '../entities/program.entity';
import { getRepository } from "typeorm";
import CreateProgramDto from "dto/program.dto";
import User from '../entities/user.entity';

exports.createProgram = async (data: CreateProgramDto, id: number) => {
  const newProgram = getRepository(Program).create(data);
  const user = await getRepository(User).findOne(id)
  newProgram.users = [user]
  const testData = getRepository(Program).save(newProgram);
  return testData;
}

exports.getAllPrograms = () => getRepository(Program).find();

exports.getProgramById = (id: number) => getRepository(Program).findOne(id);

exports.modifyProgram = (id: number, programData: Program) => {
  getRepository(Program).update(id, programData);
  return getRepository(Program).findOne(id);
}

exports.deleteProgram = (id: number) => getRepository(Program).delete(id);
