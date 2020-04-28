import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import User from './user.entity';

@Entity()
class Program {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public description: string;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];
}

export default Program;
