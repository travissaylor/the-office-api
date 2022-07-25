import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Quote } from '../../quotes/entities/quote.entity';

@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  actorName: string;

  @Column()
  gender: string;

  @Column()
  dob: string;

  @Column()
  @ManyToOne(() => Quote, (quote) => quote.character)
  quotes: Quote[];
}
