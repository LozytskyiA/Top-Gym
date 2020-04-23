import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import User from './user.entity';
import Program from './program.entity';

@Entity()
class Programs {
  @Column({ type: 'int' })
  value: number;

  @PrimaryColumn('int')
  user_id: number;

  @PrimaryColumn('int')
  program_id: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => Program)
  @JoinColumn()
  program: Program;
}

export default Program;