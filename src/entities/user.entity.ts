import { Column, Entity, PrimaryGeneratedColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import Program from './program.entity';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public user_id?: number;

  @Column()
  public name: string;

  @Column()
  public last_name: string;

  @Column()
  public email: string;

  @Column()
  public password_salt: string;

  @Column()
  public role: string;
}

export default User;
