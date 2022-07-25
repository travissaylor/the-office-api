import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Character } from '../../characters/entities/character.entity';

@Entity()
export class Quote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  content: string;

  @Column()
  @OneToMany(() => Character, (character) => character.quotes)
  character: Character;

  // @todo add Episode when it's complete
}
