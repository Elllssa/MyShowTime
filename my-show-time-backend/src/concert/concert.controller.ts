import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ConcertService } from './concert.service';
import { Concert } from './schemas/concert.schema';

@Controller('concerts')
export class ConcertController {
  constructor(private concertService: ConcertService) {}

  @Get()
  async getAllConcerts(): Promise<Concert[]> {
    return this.concertService.findAllConcerts();
  }

  @Get(':id')
  async getOneConcert(
    @Param('id')
    id: string,
  ): Promise<Concert> {
    return this.concertService.findConcertById(id);
  }

  @Post('new')
  async createConcert(
    @Body()
    concert,
  ): Promise<Concert> {
    return this.concertService.createConcert(concert);
  }

  @Put(':id')
  async updateConcert(
    @Param('id')
    id: string,
    @Body()
    concert,
  ): Promise<Concert> {
    return this.concertService.updateConcertById(id, concert);
  }

  @Delete(':id')
  async deleteOneConcert(
    @Param('id')
    id: string,
  ): Promise<Concert> {
    return this.concertService.deleteConcertById(id);
  }
}
