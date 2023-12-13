import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Concert } from './schemas/concert.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class ConcertService {
  constructor(
    @InjectModel('Concert')
    private concertModel: mongoose.Model<Concert>,
  ) {}

  async findAllConcerts(): Promise<Concert[]> {
    const concerts = await this.concertModel.find();
    return concerts;
  }

  async findConcertById(id: string): Promise<Concert> {
    const concert = await this.concertModel.findById(id);

    if (!concert) {
      throw new NotFoundException('Concert not found.');
    }

    return concert;
  }

  async createConcert(concert: Concert): Promise<Concert> {
    const res = await this.concertModel.create(concert);
    return res;
  }

  async updateConcertById(id: string, concert: Concert): Promise<Concert> {
    return await this.concertModel.findByIdAndUpdate(id, concert, {
      new: true,
      runValidators: true,
    });
  }

  async deleteConcertById(id: string): Promise<any> {
    return await this.concertModel.findByIdAndDelete(id);
  }
}
