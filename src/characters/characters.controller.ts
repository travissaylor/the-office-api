import { Controller, Get } from '@nestjs/common';

@Controller('characters')
export class CharactersController {
  @Get()
  async index() {
    return [];
  }
}
