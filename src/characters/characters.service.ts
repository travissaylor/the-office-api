import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class CharactersService {
  constructor(private dataSource: DataSource) {}
}
