import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cellphone: string;

  @Column()
  birth: string;

  @Column('float')
  weight: number;

  @Column('float')
  height: number;

  @Column()
  health_problems: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  neighborhood: string;

  @Column()
  street: string;

  @Column()
  address_number: number;

  @Column()
  zip_code: string;

  @Column()
  group_of_risk: boolean;

  @Column()
  is_health_area: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
