import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Character } from './entities/character.entity';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character)
    private characterRepository: Repository<Character>,
  ) {}

  async findAll(): Promise<Character[]> {
    return this.characterRepository.find();
  }

  async findById(id: number): Promise<Character> {
    return this.characterRepository.findOneBy({ id });
  }

  async findByName(name: string): Promise<Character> {
    return this.characterRepository.findOneBy({ name });
  }
}
