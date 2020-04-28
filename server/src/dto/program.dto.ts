import { IsString } from 'class-validator';

class CreateProgramDto {
  @IsString()
  public name: string;

  @IsString()
  public description: string;

}

export default CreateProgramDto;
