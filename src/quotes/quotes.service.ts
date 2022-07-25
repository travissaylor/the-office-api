import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { Quote } from './entities/quote.entity';

@Injectable()
export class QuotesService {
  constructor(
    @InjectRepository(Quote)
    private quoteRepository: Repository<Quote>,
  ) {}

  create(createQuoteDto: CreateQuoteDto): Quote {
    return this.quoteRepository.create(createQuoteDto);
  }

  async findAll(): Promise<Quote[]> {
    return await this.quoteRepository.find();
  }

  async findOne(id: number): Promise<Quote> {
    return await this.quoteRepository.findOneBy({ id });
  }

  async update(id: number, updateQuoteDto: UpdateQuoteDto) {
    return await this.quoteRepository.update(id, updateQuoteDto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.quoteRepository.delete(id);
  }
}
