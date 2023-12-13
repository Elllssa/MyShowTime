import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Artist } from './schemas/artist.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class ArtistService {
  constructor(
    @InjectModel('Artist')
    private artistModel: mongoose.Model<Artist>,
  ) {}

  async findAllArtists(): Promise<Artist[]> {
    const artists = await this.artistModel.find();
    return artists;
  }

  async findArtistById(id: string): Promise<Artist> {
    const artist = await this.artistModel.findById(id);

    if (!artist) {
      throw new NotFoundException('Artist not found.');
    }

    return artist;
  }

  async createArtist(artist: Artist): Promise<Artist> {
    const res = await this.artistModel.create(artist);
    return res;
  }

  async updateArtistById(id: string, artist: Artist): Promise<Artist> {
    return await this.artistModel.findByIdAndUpdate(id, artist, {
      new: true,
      runValidators: true,
    });
  }

  async deleteArtistById(id: string): Promise<any> {
    return await this.artistModel.findByIdAndDelete(id);
  }
}
