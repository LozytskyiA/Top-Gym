import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
