import { IsString } from 'class-validator';

class CreateUserDto {
  @IsString()
  public name: string;

  @IsString()
  public last_name: string;

  @IsString()
  public email: string;

  @IsString()
  public password_salt: string;

  @IsString()
  public role: string;
}

export default CreateUserDto;
